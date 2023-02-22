<template>
  <div id="app">
    <h1 class="appTitle">Campaign Validator</h1>
    <select class="campaignsList">
      <option value="" v-for="campaign in campaigns" :key="campaign">{{ campaign }}</option>
    </select>
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
</style>
