const express = require('express')
const path = require('path')
const app = express()
const port = 3000
require('dotenv').config();


// 設定EJS作為模板引擎
app.set('view engine', 'ejs')

// 設定views資料夾的路徑
app.set('views', path.join(__dirname, 'views'))

// 設定靜態文件夾，這樣你就可以從public資料夾訪問CSS和其他靜態資源
app.use(express.static(path.join(__dirname, 'public')))

const router = require('./routers/router')
app.use('/', router)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
