const axios = require('axios');
require('dotenv').config();
const path = require('path');

const express = require('express');
const PORT = process.env.PORT || 8081;
const app = express();

const data = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};
const tests = [];

app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/dist/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.get('/api/campaigns', (req, res) => {
  axios
    .post('https://api.voluum.com/auth/session', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.data) {
        axios
          .get('https://api.voluum.com/campaign', {
            headers: {
              'cwauth-token': response.data.token,
              Accept: 'application/json',
            },
          })
          .then((response) => {
            if (response.data) {
              console.log(response.data.campaigns.length);
              const data = [];
              response.data.campaigns.forEach((campaign) => {
                data.push({
                  campaignName: campaign.name,
                  url: campaign.url,
                  country: campaign.country,
                });
              });
              res.json(response.data);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get('/api/tests', (req, res) => {
  res.send(tests);
});

app.delete('/api/tests', (req, res) => {
  tests.length = 0;
  res.send('Tests cleared');
});

app.post('/api/tests/:campaignName', (req, res) => {
  const { campaignName } = req.params;
  const newTest = { date: new Date(), campaign: campaignName, status: Math.random() < 0.5 };
  tests.push(newTest);
  res.send(tests);
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
