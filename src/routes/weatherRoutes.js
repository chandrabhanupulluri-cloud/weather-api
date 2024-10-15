const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

/**
 * @swagger
 * components:
 *   schemas:
 *     WeatherResponse:
 *       type: object
 *       properties:
 *         city:
 *           type: string
 *           example: "Oshawa"
 *         weatherAPI:
 *           type: object
 *           properties:
 *             temperature:
 *               type: object
 *               properties:
 *                 location:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Oshawa"
 *                     region:
 *                       type: string
 *                       example: "Ontario"
 *                     country:
 *                       type: string
 *                       example: "Canada"
 *                     lat:
 *                       type: number
 *                       example: 43.9
 *                     lon:
 *                       type: number
 *                       example: -78.8667
 *                     tz_id:
 *                       type: string
 *                       example: "America/Toronto"
 *                     localtime_epoch:
 *                       type: integer
 *                       example: 1729021199
 *                     localtime:
 *                       type: string
 *                       example: "2024-10-15 15:39"
 *                 current:
 *                   type: object
 *                   properties:
 *                     last_updated_epoch:
 *                       type: integer
 *                       example: 1729020600
 *                     last_updated:
 *                       type: string
 *                       example: "2024-10-15 15:30"
 *                     temp_c:
 *                       type: number
 *                       example: 11.2
 *                     temp_f:
 *                       type: number
 *                       example: 52.2
 *                     is_day:
 *                       type: integer
 *                       example: 1
 *                     condition:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           example: "Partly cloudy"
 *                         icon:
 *                           type: string
 *                           example: "//cdn.weatherapi.com/weather/64x64/day/116.png"
 *                         code:
 *                           type: integer
 *                           example: 1003
 *                     wind_mph:
 *                       type: number
 *                       example: 14.1
 *                     wind_kph:
 *                       type: number
 *                       example: 22.7
 *                     wind_degree:
 *                       type: integer
 *                       example: 324
 *                     wind_dir:
 *                       type: string
 *                       example: "NW"
 *                     pressure_mb:
 *                       type: number
 *                       example: 1014
 *                     pressure_in:
 *                       type: number
 *                       example: 29.94
 *                     precip_mm:
 *                       type: number
 *                       example: 0
 *                     precip_in:
 *                       type: number
 *                       example: 0
 *                     humidity:
 *                       type: integer
 *                       example: 54
 *                     cloud:
 *                       type: integer
 *                       example: 75
 *                     feelslike_c:
 *                       type: number
 *                       example: 8.7
 *                     feelslike_f:
 *                       type: number
 *                       example: 47.6
 *                     windchill_c:
 *                       type: number
 *                       example: 8.9
 *                     windchill_f:
 *                       type: number
 *                       example: 48.1
 *                     heatindex_c:
 *                       type: number
 *                       example: 11.5
 *                     heatindex_f:
 *                       type: number
 *                       example: 52.7
 *                     dewpoint_c:
 *                       type: number
 *                       example: 2.9
 *                     dewpoint_f:
 *                       type: number
 *                       example: 37.2
 *                     vis_km:
 *                       type: number
 *                       example: 14
 *                     vis_miles:
 *                       type: number
 *                       example: 8
 *                     uv:
 *                       type: number
 *                       example: 0.9
 *                     gust_mph:
 *                       type: number
 *                       example: 17
 *                     gust_kph:
 *                       type: number
 *                       example: 27.3
 *             description:
 *               type: string
 *               example: "Partly cloudy"
 * /api/weather/{city}:
 *   get:
 *     summary: Retrieve the weather information for a city
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the city for which to retrieve the weather
 *     responses:
 *       200:
 *         description: Weather information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WeatherResponse'
 *       404:
 *         description: City not found
 */
router.get('/:city', weatherController.getWeather);



module.exports = router;
