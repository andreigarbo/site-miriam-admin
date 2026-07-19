<script setup lang="ts">
import type { AnalyticsDataEntry } from '@/types/analytics';
import { onBeforeMount, onMounted, ref } from 'vue';

const currentSortDirection = ref('descending');
const props = defineProps<{
  data: AnalyticsDataEntry[];
}>();

const tableData = ref(props.data);
console.log('td v ', tableData.value);

function sortBy(param: string) {
  if (param == 'visits') {
    if (currentSortDirection.value == 'descending') {
      //   tableData.value = tableData.value.sort((a, b) => {
      //     if (a.visits > b.visits) return -1;
      //   });
      currentSortDirection.value = 'ascending';
    } else {
      //   tableData.value.sort((a, b) => {});
      currentSortDirection.value = 'descending';
    }
  }
}

// onBeforeMount(() => {
//   tableData.value = props.data;
//   console.log('test ', tableData.value);
// });
</script>

<template>
  <table>
    <thead>
      <tr>
        <th scope="col">Continent</th>
        <th scope="col">Country</th>
        <th scope="col">City</th>
        <th @click="sortBy('visits')" scope="col">Visits</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tableData">
        <th scope="row">{{ item.continentCode }}</th>
        <td>{{ item.countryName }}</td>
        <td>{{ item.cityName }}</td>
        <td>{{ item.visits }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table {
  border: solid;
}

th,
td {
  border: solid;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

thead > tr {
  background-color: rgb(189, 189, 189);
}
</style>
