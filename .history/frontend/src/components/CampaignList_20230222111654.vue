<template>
  <select class="campaignsList" v-model="selectedCampaign">
    <option class="campaignOption" disabled value="">Please Select</option>
    <option
      class="campaignOption"
      :value="campaign"
      v-for="campaign in campaigns"
      :key="campaign.id"
    >
      {{ campaign.name }}
    </option>
  </select>
</template>

<script>
import axios from 'axios';

export default {
  props: ['campaignsList', 'selectedCampaign'],
  name: 'CampaignList',
  mounted() {
    await axios
      .get('/api/campaigns')
      .then((response) => {
        this.campaigns = response.data.campaigns;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style></style>
