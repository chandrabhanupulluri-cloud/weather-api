const { dynamoClient, USERS_TABLE } = require('../config/awsConfig');

// Create a new user
const createUser = async (userData) => {
    const params = {
        TableName: USERS_TABLE,
        Item: userData,
    };
    await dynamoClient.put(params).promise();
    return userData;
};

// Retrieve user by ID
const getUserById = async (userId) => {
    const params = {
        TableName: USERS_TABLE,
        IndexName: 'username-index', // Use a GSI for the username if needed
        KeyConditionExpression: 'username = :userId',
        ExpressionAttributeValues: {
            ':username': userId
        }
    };
    const result = await dynamoClient.get(params).promise();
    return result.Item;
};

// Retrieve user by username
const getUserByUsername = async (username) => {
    const params = {
        TableName: USERS_TABLE,
        IndexName: 'username-index', // Use a GSI for the username if needed
        KeyConditionExpression: 'username = :username',
        ExpressionAttributeValues: {
            ':username': username
        }
    };
    const result = await dynamoClient.get(params).promise();
    return result.Item;
};


// Add a city to user's list
const addUserCity = async (userId, city) => {
    const params = {
        TableName: USERS_TABLE,
        IndexName: 'username-index', // Use a GSI for the username if needed
        KeyConditionExpression: 'username = :userId',
        ExpressionAttributeValues: {
            ':username': userId
        },
        UpdateExpression: 'SET cities = list_append(cities, :city)',
        ExpressionAttributeValues: {
            ':city': [city],
        },
        ReturnValues: 'ALL_NEW',
    };
    const result = await dynamoClient.update(params).promise();
    return result.Attributes;
};

module.exports = {
    createUser,
    getUserById,
    addUserCity,
    getUserByUsername
};
