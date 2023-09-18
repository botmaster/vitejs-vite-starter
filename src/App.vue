<script setup lang="ts">


const colors = ['default', 'primary', 'secondary', 'neutral'];
</script>

<template>
  <header>
    <router-link to="/">Home</router-link> |
    <router-link to="/components">Components </router-link>
  </header>
  <router-view />
</template>

<style scoped lang="scss"></style>
