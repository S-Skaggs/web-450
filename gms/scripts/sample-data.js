const mongoose = require('mongoose');
const Garden = require('../models/garden');
const Plant = require('../models/plant');

// Connect to MongoDB
const connectionString = 'mongodb+srv://gms_user:s3cret@bellevueuniversity.y1mkstf.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity';

const dbName = 'gms';

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString, {
      dbName: dbName
    });
    console.log('Connection to the database instance was successful');
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
  }
}

connectToDatabase(); // Call the function to connect to the database