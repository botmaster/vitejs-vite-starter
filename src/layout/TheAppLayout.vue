<script setup lang="ts">
import TheFooter from '@/components/layout/TheFooter.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheHeader>
      <template #header-menu-main>
        <RouterLink :to="{ name: 'about' }">
          Abous
        </RouterLink>
        <RouterLink :to="{ name: 'tasks' }">
          Tasks
        </RouterLink>
      </template>
      <template #header-menu-panel="{ close }">
        <RouterLink :to="{ name: 'about' }" @click="close">
          Abous
        </RouterLink>
        <RouterLink :to="{ name: 'tasks' }" @click="close">
          Tasks
        </RouterLink>
      </template>
    </TheHeader>
    <div class="md:container mt-24 flex-grow pb-24 px-6">
      <router-view />
    </div>

    <TheFooter>
      <template #footer-links>
        <RouterLink :to="{ name: 'home' }">
          Homepage
        </RouterLink>
        <RouterLink :to="{ name: 'about' }">
          Abous
        </RouterLink>
        <RouterLink :to="{ name: 'tasks' }">
          Tasks
        </RouterLink>
        <RouterLink :to="{ name: 'designSystemHomepage' }">
          Design System
        </RouterLink>
      </template>
    </TheFooter>
  </div>
</template>

<style scoped lang="scss">

</style>
