const User = require('../user')
// mongoose
const db = require('../../config/mongoose')

// 測試種子資料
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman',
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday',
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram',
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!',
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password',
  },
]

// 連線成功
db.once('open', () => {
  // 建立資料
  users.forEach((user) => {
    User.create({
      firstName: user.firstName,
      email: user.email,
      password: user.password,
    })
  })
  console.log('userSeeder done!')
})
