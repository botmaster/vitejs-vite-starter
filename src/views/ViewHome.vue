<script setup lang="ts">
import { useMouse } from '@vueuse/core';

// tracks mouse position
const { x, y } = useMouse();
</script>

<template>
  <div class="">
    <h2>View Home</h2>
    <pre>Mouse position: {{ x }}, {{ y }}</pre>
  </div>
</template>
