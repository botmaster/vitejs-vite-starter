<script setup lang="ts">

import TheMainLayout from "@/layout/TheMainLayout.vue";
import TheDesignSystemLayout from "@/layout/TheDesignSystemLayout.vue";
</script>

<template>
  <TheDesignSystemLayout v-if="$route.meta.layout === 'ds'"></TheDesignSystemLayout>
  <TheMainLayout v-if="$route.meta.layout === 'default'"/>
</template>

<style scoped lang="scss"></style>
