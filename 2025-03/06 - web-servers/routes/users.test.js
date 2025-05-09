const request = require('supertest')
const express = require('express')
const { apiRouter } = require('./users.js')

const app = express()
app.use(express.json())
app.use('/api/users', apiRouter)

describe('User API CRUD operations', () => {
  let userId

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john@example.com' })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe('John Doe')
    expect(response.body.email).toBe('john@example.com')

    userId = response.body.id
  })

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Nik Doe', email: 'nik@example.com' })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
    expect(response.body.name).toBe('Nik Doe')
    expect(response.body.email).toBe('nik@example.com')
  })

  it('should get all users', async () => {
    const response = await request(app).get('/api/users')

    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it('should get a user by ID', async () => {
    const response = await request(app).get(`/api/users/${userId}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id', userId)
    expect(response.body.name).toBe('John Doe')
    expect(response.body.email).toBe('john@example.com')
  })

  it('should update a user by ID', async () => {
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send({ name: 'Jane Doe', email: 'jane@example.com' })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id', userId)
    expect(response.body.name).toBe('Jane Doe')
    expect(response.body.email).toBe('jane@example.com')
  })

  it('should delete a user by ID', async () => {
    const response = await request(app).delete(`/api/users/${userId}`)

    expect(response.status).toBe(204)
  })

  it('should return 404 when trying to get a deleted user', async () => {
    const response = await request(app).get(`/api/users/${userId}`)

    expect(response.status).toBe(404)
  })
})

// Доступ до узла адресу 8.8.8.8

// 8.8.8.0/24 -> 8.8.8.1,8.8.8.2,8.8.8.3
