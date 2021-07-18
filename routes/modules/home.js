// Express
const express = require('express')
// 路由器
const router = express.Router()
// user model
const User = require('../../models/user')

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 登入
router.post('/login', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email, password })
    .lean()
    .then((user) => {
      if (!user) {
        const loginFault = true
        res.render('index', { email, password, loginFault })
      } else {
        res.render('welcome', { user })
      }
    })
    .catch((error) => console.error(error))
})

// 匯出路由器
module.exports = router
