<template>
  <select class="campaignsList" v-model="selectedCampaign" @input="emitSelectedCampaign">
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
  name: 'CampaignList',
  data() {
    return {
      selectedCampaign: '',
      campaigns: [],
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
  },
  methods: {
    emitSelectedCampaign() {
      this.$emit('selected-campaign', this.selectedCampaign);
    },
  },
  emits
};
</script>

<style></style>
