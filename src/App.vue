<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  titleTemplate: (title?: string) => (!title ? 'Zégut PG 🤘' : `${title} - Zégut PG 🤘`),
  title: 'My awesome site first',
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
      href: 'https://vueuse.org/logo.png',
    },
  ],
  bodyAttrs: {
    onresize: () => {
      console.log('resized');
    },
  },
  script: [
    {
      src: 'https://unpkg.com/vue@next',
      onload: () => {
        console.log('loaded');
      },
    },
  ],
});
</script>

<template>
  <component :is="$route.meta.layout" v-if="$route?.meta?.layout" />
  <main v-else>
    <router-view />
  </main>
</template>

<style scoped lang="scss"></style>
