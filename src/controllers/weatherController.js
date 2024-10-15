const axios = require('axios');

// const getOpenWeather = async (city) => {
//     const apiKey = process.env.OPENWEATHER_API_KEY;
    
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     const response = await axios.get(url);
//     const { temp } = response.data;
//     console.log('open weather....',response.data)
//     const description = response.data.weather[0].description;

//     return { temperature: temp, description };
// };

const getWeatherAPI = async (city) => {
    const apiKey = process.env.WEATHERAPI_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await axios.get(url);
    const temp = response.data;
    const description = response.data.current.condition.text;

    return { temperature: temp, description };
};

exports.getWeather = async (req, res) => {
    const city = req.params.city;

    try {
        // const openWeatherData = await getOpenWeather(city);
        console.log('city check', city)
        const weatherAPIData = await getWeatherAPI(city);

        // Combine results from both providers
        res.json({
            city,
            // openWeather: openWeatherData,
            weatherAPI: weatherAPIData,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};
