<script setup lang="ts">
import { useMouse } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

// tracks mouse position
const { x, y } = useMouse();

const { t } = useI18n({
});
</script>

<template>
  <div class="">
    <h2 class="heading-2 mb-8">
      {{ t("view-home") }}
    </h2>
    <pre>Mouse position: {{ x }}, {{ y }}</pre>
  </div>
</template>
