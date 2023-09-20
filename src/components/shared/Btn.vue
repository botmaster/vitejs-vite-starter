<script setup lang="ts">
import { computed } from 'vue';
import IconLoaderSvg from '@svg/icon-loader.svg?component';

// Props types
export interface Props {
  colorVariant?: string
  outlined?: boolean
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  readonly?: boolean
  tag?: string
  loading?: boolean
  icon?: boolean
}

// Props
const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'primary',
  outlined: false,
  size: 'md',
  disabled: false,
  readonly: false,
  tag: 'button',
  loading: false,
  icon: false,
});

// Computed classes
const classes = computed(() => {
  const classes = [];

  if (props.loading) 
    classes.push('btn--loading');
  
  if (props.colorVariant) 
    classes.push(`btn--${props.colorVariant}`);
  

  if (props.outlined) 
    classes.push('btn--outlined');
  

  if (props.size) 
    classes.push(`btn--${props.size}`);
  

  if (props.disabled || props.readonly) 
    classes.push('btn--disabled');
  

  if (props.icon) 
    classes.push('btn--icon');
  

  return classes.join(' ');
});
</script>

<template>
  <Component :is="tag" class="btn" :class="classes">
    <template v-if="loading">
      <span class="flex gap-1.5 opacity-0">
        <slot />
      </span>
      <span class="absolute"><IconLoaderSvg class="w-[1.8em] fill-current" /></span>
    </template>
    <template v-else>
      <slot />
    </template>
  </Component>
</template>

<style scoped lang="scss"></style>
