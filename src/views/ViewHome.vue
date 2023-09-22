<script setup lang="ts">
import { useMouse } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

// tracks mouse position
const { x, y } = useMouse();

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});
</script>

<template>
  <div class="">
    <h2>{{ t('view-home') }}</h2>
    <pre>Mouse position: {{ x }}, {{ y }}</pre>
  </div>
</template>
