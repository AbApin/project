<template>
  <div id="app">
    <h1 class="appTitle">Campaign Validator</h1>
    <select class="campaignsList">
      <option value="" v-for="campaign in campaigns" :key="campaign">{{ campaign.name }}</option>
    </select>
    <button class="launchBtn">launch</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      campaigns: [],
    };
  },
  mounted() {
    fetch('/campaigns')
      .then((response) => response.json())
      .then((data) => (this.campaigns = data.campaigns));
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
}
</style>
