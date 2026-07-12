<script setup lang="ts">
import { GetAllAnalyticsRequest } from '@/requests/analytics';
import router from '@/router';
import { onMounted, ref } from 'vue';

const analyticsData = ref('');

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
}

onMounted(fetchData);
</script>

<template>
  <div></div>
</template>

<style></style>
