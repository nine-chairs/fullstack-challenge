const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const port = 4000;

const originSchema = new mongoose.Schema({
  name: String,
  url: String,
})
const characterSchema = new mongoose.Schema({
  name: String,
  status: String,
  species: String,
  gender: String,
  image: String,
  origin: originSchema,
});

const Character = mongoose.model('Character', characterSchema);
app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results;
    await Character.insertMany(characters);
    res.json(characters);
  } catch (error) {
    console.error('Error fetching data from the Rick and Morty API:', error);
    res.status(500).json({ error: 'Failed to fetch character data' });
  }
});
const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/fullstack-challenge', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    //mongoose.connection.close()
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
////
app.get('/db/characters', async (req, res) => {
  try {
    // Ensure that the server is connected to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await connectToMongoDB();
    }
    // Query all characters from the database
    const characters = await Character.find();
    // Send the characters as a response
    res.json(characters);
  } catch (error) {
    console.error('Error fetching data from db', error);
    res.status(500).json({ error: 'Failed to fetch character data' });
  }
});
///////
connectToMongoDB();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});