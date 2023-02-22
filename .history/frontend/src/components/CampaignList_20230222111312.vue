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
export default {
    props:
  name: 'CampaignList',
};
</script>

<style></style>
