import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection } from 'mongoose';
import request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';
import { AuthService } from '../src/auth/auth.service';
import { UsersModule } from '../src/users/users.module';
import { UsersService } from '../src/users/users.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;
  let authService: AuthService;
  let authToken: string;
  let userId: string;
  let mongoServer: MongoMemoryServer;
  let mongoUri: string;
  let connection: Connection;

  beforeAll(async () => {
    // Создаем in-memory MongoDB сервер
    mongoServer = await MongoMemoryServer.create();
    mongoUri = mongoServer.getUri();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseModule.forRoot(mongoUri),
        UsersModule,
        AuthModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, transform: true }),
    );

    usersService = moduleFixture.get<UsersService>(UsersService);
    authService = moduleFixture.get<AuthService>(AuthService);
    connection = moduleFixture.get<Connection>(getConnectionToken());

    await app.init();
  });

  afterAll(async () => {
    if (connection) {
      await connection.dropDatabase();
      await connection.close();
    }
    await mongoServer.stop();
    await app.close();
  });

  beforeEach(async () => {
    // Очищаем базу данных перед каждым тестом
    if (connection) {
      const collections = connection.collections;
      for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
      }
    }
  });

  describe('Auth (e2e)', () => {
    it('/auth/login (POST) - should login successfully', async () => {
      // Создаем пользователя
      const createUserDto = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };
      await usersService.create(createUserDto);

      // Логинимся
      const loginDto = {
        email: 'test@example.com',
        password: 'password123',
      };

      const response = await request(app.getHttpServer())
        .post('/auth/login')
        .send(loginDto)
        .expect(200);

      expect(response.body).toHaveProperty('access_token');
      expect(response.body).toHaveProperty('user');
      expect(response.body.user.email).toBe('test@example.com');
      authToken = response.body.access_token;
    });

    it('/auth/login (POST) - should return 401 for invalid credentials', async () => {
      const loginDto = {
        email: 'wrong@example.com',
        password: 'wrongpassword',
      };

      await request(app.getHttpServer())
        .post('/auth/login')
        .send(loginDto)
        .expect(401);
    });

    it('/auth/login (POST) - should validate input', async () => {
      const loginDto = {
        email: 'invalid-email',
        password: '',
      };

      await request(app.getHttpServer())
        .post('/auth/login')
        .send(loginDto)
        .expect(400);
    });
  });

  describe('Users CRUD (e2e)', () => {
    beforeEach(async () => {
      // Создаем пользователя и получаем токен для тестов
      const createUserDto = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
      };
      const user = await usersService.create(createUserDto);
      userId = user._id.toString();

      const loginResponse = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });
      authToken = loginResponse.body.access_token;
    });

    it('/users (POST) - should create a new user', async () => {
      const createUserDto = {
        email: 'newuser@example.com',
        password: 'password123',
        name: 'New User',
        age: 30,
      };

      const response = await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(201);

      expect(response.body).toHaveProperty('_id');
      expect(response.body.email).toBe('newuser@example.com');
      expect(response.body.name).toBe('New User');
      expect(response.body).not.toHaveProperty('password');
    });

    it('/users (POST) - should validate input', async () => {
      const createUserDto = {
        email: 'invalid-email',
        password: '123',
        name: '',
      };

      await request(app.getHttpServer())
        .post('/users')
        .send(createUserDto)
        .expect(400);
    });

    it('/users (GET) - should return all users', async () => {
      const response = await request(app.getHttpServer())
        .get('/users')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
      response.body.forEach((user: any) => {
        expect(user).not.toHaveProperty('password');
      });
    });

    it('/users (GET) - should return 401 without token', async () => {
      await request(app.getHttpServer()).get('/users').expect(401);
    });

    it('/users/:id (GET) - should return a user by id', async () => {
      const response = await request(app.getHttpServer())
        .get(`/users/${userId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body._id).toBe(userId);
      expect(response.body).not.toHaveProperty('password');
    });

    it('/users/:id (GET) - should return 404 for non-existent user', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      await request(app.getHttpServer())
        .get(`/users/${fakeId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('/users/:id (PATCH) - should update a user', async () => {
      const updateUserDto = {
        name: 'Updated Name',
        age: 35,
      };

      const response = await request(app.getHttpServer())
        .patch(`/users/${userId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateUserDto)
        .expect(200);

      expect(response.body.name).toBe('Updated Name');
      expect(response.body.age).toBe(35);
    });

    it('/users/:id (PATCH) - should update password', async () => {
      const updateUserDto = {
        password: 'newPassword123',
      };

      await request(app.getHttpServer())
        .patch(`/users/${userId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateUserDto)
        .expect(200);

      // Проверяем, что новый пароль работает
      const loginResponse = await request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'test@example.com',
          password: 'newPassword123',
        })
        .expect(200);

      expect(loginResponse.body).toHaveProperty('access_token');
    });

    it('/users/:id (DELETE) - should delete a user', async () => {
      await request(app.getHttpServer())
        .delete(`/users/${userId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(204);

      // Проверяем, что пользователь удален
      await request(app.getHttpServer())
        .get(`/users/${userId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('/users/:id (DELETE) - should return 404 for non-existent user', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      await request(app.getHttpServer())
        .delete(`/users/${fakeId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });
});
