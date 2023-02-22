const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const express = require('express');


const data = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from backend express.js',
  });
});
