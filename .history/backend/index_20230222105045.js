const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 8081;
const app = express();

const data = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

app.use(express.json());

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
              //   fs.writeFile('campaigns.txt', JSON.stringify(data, null, ' '), function (err) {
              //     if (err) throw err;
              //     console.log('Saved!');
              //   });
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

app.post('/api/tests/:campaignName', (req, res) => {
  const { campaignName } = req.params;
  const newTest = { date: new Date(), campaign: campaignName, status: Math.random() < 0.5 };
  tests.push(newTest);
  res.send(tests);
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
