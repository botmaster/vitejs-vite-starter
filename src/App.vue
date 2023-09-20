<script setup lang="ts">


</script>

<template>
  <component v-if="$route?.meta?.layout" :is="$route.meta.layout"></component>
  <main v-else>
    <router-view></router-view>
  </main>
</template>

<style scoped lang="scss"></style>
