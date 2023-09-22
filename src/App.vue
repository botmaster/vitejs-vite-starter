<script setup lang="ts">

</script>

<template>
  <component :is="$route.meta.layout" v-if="$route?.meta?.layout" />
  <main v-else>
    <router-view />
  </main>
</template>

<style scoped lang="scss"></style>
