<script setup lang="ts">
import { computed } from "vue";
import IconLoaderSvg from "../assets/svg/icon-loader.svg?component";

// Props types
export interface Props {
  colorVariant?: string;
  outlined?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  readonly?: boolean;
  tag?: string;
  loading?: boolean;
}

// Props
const props = withDefaults(defineProps<Props>(), {
  colorVariant: "primary",
  outlined: false,
  size: "md",
  disabled: false,
  readonly: false,
  tag: "button",
  loading: false,
});

// Computed classes
const classes = computed(() => {
  const classes = [];

  if (props.loading) {
    classes.push("btn--loading");
  }
  if (props.colorVariant) {
    classes.push(`btn--${props.colorVariant}`);
  }

  if (props.outlined) {
    classes.push("btn--outlined");
  }

  if (props.size) {
    classes.push(`btn--${props.size}`);
  }

  if (props.disabled || props.readonly) {
    classes.push("btn--disabled");
  }

  return classes.join(" ");
});
</script>

<template>
  <Component :is="tag" class="btn" :class="classes">
    <template v-if="loading">
      <span class="flex gap-1.5 opacity-0">
        <slot></slot>
      </span>
      <span class="absolute"><IconLoaderSvg class="w-[1.8em] fill-current"></IconLoaderSvg></span>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </Component>
</template>

<style scoped lang="scss"></style>
