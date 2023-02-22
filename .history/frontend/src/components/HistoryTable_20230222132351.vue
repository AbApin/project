<template>
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
</template>

<script>
export default {
  name: 'HostoryTable',
};
</script>

<style>
</style>
