<script setup lang="ts">
import { computed } from 'vue';

type ColorVariant = 'default' | 'danger' | 'warning' | 'success' | 'neutral';

export interface Props {
  label: string
  colorVariant?: ColorVariant
}

const props = withDefaults(defineProps<Props>(), {

});

// Variants map
const variants: Record<ColorVariant, string> = {
  default: 'badge--is-default',
  danger: 'badge--is-dander',
  warning: 'badge--is-warning',
  success: 'badge--is-success',
  neutral: 'badge--is-neutral',
};


// Computed classes
const classes = computed(() => {
  const classes = [];

  if (props.colorVariant)
    classes.push(variants[props.colorVariant]);

  return classes.join(' ');
});
</script>

<template>
  <span class="badge" :class="classes">
    <span>{{ props.label }}</span>
  </span>
</template>

<style scoped lang="scss">

</style>
