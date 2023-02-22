const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const data = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
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
