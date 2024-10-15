const express = require('express'); 
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
dotenv.config();
const port = process.env.PORT || 3001;
const weatherRoutes = require('./src/routes/weatherRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(express.json());

// Use cors middleware to allow requests from any origin
app.use(cors({
  origin: 'http://13.201.61.213:3000'  // Allow only this origin
}));

// Or if you want to allow requests from any origin, use:
app.use(cors()); 

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0', // OpenAPI version
  info: {
    title: 'Weather APIs for Interview',
    version: '1.0.0', // API version
    description: 'Swagger for Weather APIs', 
  },
  servers: [
    {
      url: 'http://localhost:3000', // The base URL of your API
    },
  ],
};

// Swagger options
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};
  
// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsDoc(options);

// Serve Swagger docs using swagger-ui-express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  /**
 * @swagger
 * /:
 *   get:
 *     description: Hello world
 *     responses:
 *       200:
 *         description:  APIs to get weather updates
 *         content:
 *           application/json:
 */

  app.get('/', (req, res)=>{
    res.send('Hello World.... 3.0')
  })

// Routes
app.use('/api/weather', weatherRoutes);
app.use('/api/users', userRoutes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


module.exports = app;
