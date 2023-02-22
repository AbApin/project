<template>
  <div id="app">
    <h1 class="appTitle">Campaign Validator</h1>
    <CampaignList :campaigns-list="campaigns"/>
    <table>
      <thead>
        <tr>
          <th>Date Created</th>
          <th>Campaign Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="test in tests" :key="test.id">
          <td>{{ test.date }}</td>
          <td>{{ test.campaign }}</td>
          <td :class="test.status ? 'status-passed' : 'status-failed'">
            {{ test.status ? 'Passed' : 'Failed' }}
          </td>
        </tr>
      </tbody>
    </table>
    <button class="launchBtn" @click="createTest">launch</button>
  </div>
</template>

<script>
import axios from 'axios';
import CampaignList from './components/CampaignList.vue';

export default {
  components: { CampaignList },
  name: 'App',
  data() {
    return {
      selectedCampaign: '',
      campaigns: [],
      tests: [],
    };
  },
  async mounted() {
    await axios
      .get('/api/campaigns')
      .then((response) => {
        this.campaigns = response.data.campaigns;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get('/api/tests')
      .then((response) => {
        this.tests = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async createTest() {
      await axios
        .post(`/api/tests/${this.selectedCampaign.name}`)
        .then((response) => {
          this.tests = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Montserrat', sans-serif;
}
#app {
  background: #5d5f66;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  height: 100vh;
}
.appTitle {
  font-size: 45px;
  color: #fff;
}
.launchBtn {
  font-size: 25px;
  text-transform: capitalize;
  padding: 20px;
  border-radius: 20px;
  border: 0;
  background: rgba(55, 25, 235, 1);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.launchBtn:hover {
  box-shadow: 0 0 10px rgba(55, 25, 235, 1);
}
select.campaignsList {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

select.campaignsList:hover {
  border-color: #999;
}

select.campaignsList:focus {
  outline: none;
  border-color: #4d90fe;
  box-shadow: 0 0 0 2px rgba(77, 144, 254, 0.2);
}

.campaignOption {
  font-size: 14px;
  font-weight: normal;
}

.campaignOption:hover {
  background-color: #f2f2f2;
}

/* table */
table {
  border-collapse: collapse;
  width: 80%;
}
thead th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
tbody td {
  border: 1px solid #ddd;
  padding: 8px;
}
tbody tr {
  background-color: #ddd;
}
tbody tr:hover {
  background-color: #fff;
}
.status-passed {
  color: green;
}
.status-failed {
  color: red;
}
</style>
