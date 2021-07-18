// mongoose
const mongoose = require('mongoose')

// 連線MongoDB
mongoose.connect('mongodb://localhost/user-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// 資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected')
})

module.exports = db
