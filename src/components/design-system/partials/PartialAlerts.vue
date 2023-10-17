<script setup lang="ts">
import AppAlert from '@/components/shared/AppAlert.vue';
</script>

<template>
  <h2 id="alert" class="relative">
    Alert
    <a class="header-anchor" href="#alert" aria-label="Permalink to &quot;alert&quot;">​</a>
  </h2>

  <p>
    Component <code>AppAlert</code>
  </p>

  <h3>Variants</h3>
  <div class="space-y-4 not-prose md:text-base">
    <AppAlert />
    <AppAlert :closable="false" />
  </div>

  <h3 class="">
    Statuses
  </h3>
  <div class="space-y-4 not-prose md:text-base">
    <AppAlert status="info" />
    <AppAlert status="warning" />
    <AppAlert status="danger" />
    <AppAlert status="success" />
  </div>
</template>

<style scoped lang="scss">

</style>
