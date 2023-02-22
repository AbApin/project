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
import axios from 'axios';

export default {
  name: 'HostoryTable',
  props: []
  data() {
    return {
      tests: [],
    };
  },
  async mounted() {
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
    
  }
};
</script>

<style>
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
