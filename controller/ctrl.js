// 引入model模組中的getWeatherData函數
const { getWeatherData } = require('../model/model')

// 定義一個映射表，將英文的天氣專有名詞映射為中文
const terminologyMapping = {
    Wx: '天氣狀況',
    PoP: '降雨概率',
    MinT: '最低溫度',
    MaxT: '最高溫度',
    CI: '舒適度',
}

// 定義一個異步函數，用於處理首頁的請求
const get_index = async (req, res) => {
    try {
        // 從氣象局API獲取天氣數據
        const weatherData = await getWeatherData()

        // 檢查是否獲取到數據，並進行專有名詞的轉換
        if (weatherData && weatherData.records && weatherData.records.location) {
            weatherData.records.location.forEach((location) => {
                location.weatherElement.forEach((element) => {
                    // 如果該專有名詞存在於映射表中，則進行轉換
                    if (terminologyMapping[element.elementName]) {
                        element.elementName = terminologyMapping[element.elementName]
                    }
                })
            })
        }

        // 使用res.render方法渲染weather模板，並傳入天氣數據
        res.render('weather', { weatherData: weatherData })
    } catch (error) {
        // 如果在取得或處理數據時發生錯誤，返回500狀態碼並發送錯誤消息
        res.status(500).send('Error fetching weather data')
    }
}

// 將get_index函數導出，使其他模組可以使用
module.exports = {
    get_index,
}
