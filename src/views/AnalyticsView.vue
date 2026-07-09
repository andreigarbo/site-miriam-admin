<script setup lang="ts">
import { GetAllAnalyticsRequest } from '@/requests/analytics';
import { onMounted, ref } from 'vue';

const analyticsData = ref('');

async function fetchData() {
  const request = new GetAllAnalyticsRequest();
  const response = await request.dispatch();

  if (!response) {
    console.error('Error fetching analytics data');
    return;
  }

  if (!response.data) {
    console.error('No data on server response');
    return;
  }
}

onMounted(fetchData);
</script>

<template>
  <div></div>
</template>

<style></style>
