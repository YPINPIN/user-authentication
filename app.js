// Express
const express = require('express')
// express-handlebars
const exphbs = require('express-handlebars')
// 引用路由器，會自動抓取index
const routes = require('./routes')
// Server Port
const port = 3000
// mongoose
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 將 request 導入路由器
app.use(routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
