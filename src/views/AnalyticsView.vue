<script setup lang="ts">
import AnalyticsTable from '@/components/AnalyticsTable.vue';
import { GetAllAnalyticsRequest } from '@/requests/analytics';
import router from '@/router';
import { isAnalyticsDataEntry } from '@/utils/typeGuards';
import { onBeforeMount, onMounted, ref } from 'vue';

const analyticsData = ref();

async function fetchData() {
  const request = new GetAllAnalyticsRequest();
  const response = await request.dispatch();
  console.log(response);
  if (!response) {
    router.push('/login');
    return;
  }

  if (response.status == 500 || response.message == 'jwt expired') {
    router.push('/login');
    return;
  }

  if (!response.data) {
    console.error('No data on server response');
    router.push('/login');
    return;
  }

  const analyticsDiv = document.querySelector('#analytics-div');

  if (!analyticsDiv || analyticsDiv == null) {
    return;
  }

  analyticsData.value = [];
  for (const obj of response.data) {
    if (isAnalyticsDataEntry(obj)) {
      analyticsData.value.push(obj);
    } else {
      console.log(obj);
    }
  }
}

// onMounted(fetchData);
onBeforeMount(fetchData);
</script>

<template>
  <div id="analytics-div">
    <AnalyticsTable id="analytics-table" :data="analyticsData"></AnalyticsTable>
  </div>
</template>

<style>
#analytics-div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
