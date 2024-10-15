const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/users/{userId}/cities:
 *   get:
 *     summary: Retrieve cities for a specific user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to retrieve cities for
 *     responses:
 *       200:
 *         description: A list of cities for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   example: "12345"
 *                 cities:
 *                   type: array
 *                   items:
 *                     type: string
 *                     example: "Oshawa"
 *       404:
 *         description: User not found
 */
router.get('/:userId/cities', userController.getUserCities);


/**
 * @swagger
 * /api/users/addUser:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Chandra"
 *               cities:
 *                 type: string 
 *                 example: "['Toronto', 'New York']"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
 *                 userId:
 *                   type: string
 *                   example: "12345"
 *       400:
 *         description: Invalid input
 *       409:
 *         description: User already exists
 */
router.post('/addUser', userController.createUser);

/**
 * @swagger
 * /api/users/{userId}/cities:
 *   post:
 *     summary: Add a new city for a specific user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to add a city for
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               city:
 *                 type: string
 *                 example: "Toronto"
 *     responses:
 *       201:
 *         description: City added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "City added successfully"
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 */
router.post('/:userId/cities', userController.addCity);

module.exports = router;
