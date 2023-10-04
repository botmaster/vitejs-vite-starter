<script setup lang="ts">
type ColorVariant = 'default' | 'error' | 'warning' | 'success' | 'neutral';

export interface Props {
  label: string
  colorVariant?: ColorVariant | string
}

const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'default',
});
</script>

<template>
  <span class="badge" :class="[`badge--is-${props.colorVariant}`]">
    <span>{{ props.label }}</span>
  </span>
</template>

<style scoped lang="scss">

</style>
