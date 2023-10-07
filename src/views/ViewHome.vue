<script setup lang="ts">
import { useMouse } from '@vueuse/core';
import AppHero from '@/components/layout/AppHero.vue';
import AppContainer from '@/components/layout/AppContainer.vue';

// tracks mouse position
const { x, y } = useMouse();
</script>

<template>
  <div class="overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36">
    <AppContainer>
      <AppHero />
    </AppContainer>
  </div>
  <div class="mb-12 lg:mb-24">
    <AppContainer>
      <pre>Mouse position: {{ x }}, {{ y }}</pre>
    </AppContainer>
  </div>
</template>
