const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/formDataDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schema
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const FormData = mongoose.model('FormData', formDataSchema);

// Routes
app.post('/api/submit', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: 'Data saved successfully', data: formData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const data = await FormData.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 