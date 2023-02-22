<template>
  <div id="app">
    <h1 class="appTitle">Campaign Validator</h1>
    <select class="campaignsList" v-model="selected">
      <option class="campaignOption" disabled value="">Please Select</option>
      <option
        class="campaignOption"
        :value="campaign"
        v-for="campaign in campaigns"
        :key="campaign"
      >
        {{ campaign.name }}
      </option>
    </select>
    <button class="launchBtn">launch</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      selected: '',
      campaigns: [],
    };
  },
   mounted() {
    async axios
      .get('/campaigns')
      .then((response) => {
        this.campaigns = response.data.campaigns;
      })
      .catch((error) => {
        console.log(error);
      });
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
  background: #e74c3c;
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
.campaignsList {
  max-width: 50%;
  width: 100%;
  border: 0;
  padding: 10px;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.campaignOption {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px !important;
  background: gray;
  color: #fff;
  transition: all 0.3s linear;
}
.campaignOption:hover {
  background: #e74c3c !important;
}
</style>
