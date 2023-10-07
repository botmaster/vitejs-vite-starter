<script setup lang="ts">
import { useHead, useSeoMeta } from '@unhead/vue';

useHead({
  title: 'My awesome about page',
});

useSeoMeta({
  ogDescription: 'Still about my about page',
  ogTitle: 'About',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div>
    <h2 class="heading-2 mb-8">
      About
    </h2>
  </div>
</template>

<style scoped lang="scss">

</style>
