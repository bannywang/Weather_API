// 引入axios模組，用於發起HTTP請求
const axios = require('axios')

// 氣象局API的授權密鑰
const API_KEY = process.env.WEATHER_API_KEY

// 氣象局API的基本URL
const BASE_URL = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001'

// 異步函數，用於從氣象局API獲取天氣數據
async function getWeatherData(type) {
    // 創建完整的請求URL，加入授權密鑰
    const url = `${BASE_URL}?Authorization=${API_KEY}`

    // 使用axios發起GET請求
    const response = await axios.get(url)

    // 返回API的響應數據
    return response.data
}

// 將getWeatherData函數導出，使其他模組可以使用
module.exports = {
    getWeatherData,
}
