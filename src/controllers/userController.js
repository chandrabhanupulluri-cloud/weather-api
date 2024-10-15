const { createUser, getUserById, addUserCity, getUserByUsername } = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
    const { username, cities } = req.body;
    const userData = {
        id: Date.now().toString(),
        username,
        cities: cities || [],
    };

    try {
        const newUser = await createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Get user's cities by ID
exports.getUserCities = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await getUserById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user.cities);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user cities' });
    }
};

exports.getUserDetails = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await getUserByUsername(username);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve user cities' });
    }
};

// Add a city to user's list
exports.addCity = async (req, res) => {
    const { userId } = req.params;
    const { city } = req.body;

    try {
        const updatedUser = await addUserCity(userId, city);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add city' });
    }
};
