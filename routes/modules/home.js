// Express
const express = require('express')
// 路由器
const router = express.Router()

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 匯出路由器
module.exports = router
