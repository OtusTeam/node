Авторизация

use admin

-- Создаем root админа
db.createUser({ 
 user: "root", 
 pwd: "strictRootPassword",
 roles: [
  { role: "root", db: "admin" }
 ] 
})

-- Или root супер-админа.

db.createRole(
    {      
     role: "superRoot",      
     privileges:[
        { resource: {anyResource:true}, actions: ["anyAction"]}
     ],      
     roles:[] 
    }
)

db.createUser({ 
 user: "readWriteUser", 
 pwd: "strictReadWritePassword",
 roles: [
  { role: "readWrite", db: "test" }
 ] 
})

db.createUser({      
     user: "companyDBA",      
     pwd: "strictSuperRootPassword",      
     roles: ["superRoot"] 
})

-- Посмотреть пользователей
db.getUsers()
db.system.roles.find()
db.system.users.find()

-- Выходим и включаем авторизацию
exit
nano /etc/mongod.conf

security:
  authorization: enabled

-- Ребутаем и пробуем
sudo service mongod restart

-- Подключаемся
mongosh

mongosh -u root -p --authenticationDatabase admin

use test
-- Создаем юзер под test
db.createUser({ 
 user: "test_user", 
 pwd: "test_password", 
 roles: [{ 
  role: "readWrite", 
  db: "test" 
 }] 
})