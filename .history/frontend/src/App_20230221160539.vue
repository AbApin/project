<template>
  <div id="app">
    <h1 class="appTitle">Campaign Validator</h1>
    <select class="campaignsList" v-model="selected">
      <option disabled value="">Please Select</option>
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
export default {
  name: 'App',
  data() {
    return {
      selected: '',
      campaigns: [],
    };
  },
  async created() {
    const response = await fetch('/campaigns');
    const data = await response.json();
    this.campaigns = data.campaigns;
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
}
.campaignOption{
  padding: 10px;
  ba
}
</style>
