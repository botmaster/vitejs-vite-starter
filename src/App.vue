<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  titleTemplate: (title?: string) => (!title ? 'Site name' : `${title} - Site name 🤘`),
  title: 'Description of the site (via layout)',
  meta: [
    {
      name: 'description',
      content: 'Vue 3 Head is a Vue 3 composition API for managing the document head.',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://vuejs.org/logo.svg',
    },
  ],
  bodyAttrs: {
    onresize: () => {
      console.log('resized');
    },
  }
});
</script>

<template>
  <component :is="$route.meta.layout" v-if="$route?.meta?.layout" />
  <main v-else>
    <router-view />
  </main>
</template>

<style scoped lang="scss"></style>
