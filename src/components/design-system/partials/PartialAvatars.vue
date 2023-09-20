<script setup lang="ts">
import Avatar from '@/components/shared/Avatar.vue';

const colors = [
  'default',
  'primary',
  'secondary',
  'neutral',
];
</script>

<template>
  <h2 class="">
    Avatar
  </h2>
  <h3 class="">
    Variants
  </h3>
  <div class="flex items-end  gap-3 not-prose">
    <Avatar v-for="color in colors" :key="color" :name="color" :color-variant="color" />
  </div>
  <h3 class="">
    Shapes
  </h3>
  <div class="flex items-end  gap-3 not-prose">
    <Avatar src="https://placekitten.com/250/250" />
    <Avatar src="https://placekitten.com/250/250" :rounded="false" />
  </div>
  <h3 class="">
    Sizes
  </h3>
  <div class="flex items-end  gap-3 not-prose">
    <Avatar src="https://placekitten.com/250/250" size="sm" />
    <Avatar src="https://placekitten.com/250/250" size="md" />
    <Avatar src="https://placekitten.com/250/250" size="lg" />
    <Avatar src="https://placekitten.com/250/250" size="sm" :rounded="false" />
    <Avatar src="https://placekitten.com/250/250" size="md" :rounded="false" />
    <Avatar src="https://placekitten.com/250/250" size="lg" :rounded="false" />
  </div>
  <h3 class="">
    Status
  </h3>
  <div class="flex items-end  gap-3 not-prose">
    <Avatar src="https://placekitten.com/250/250" status="active" />
    <Avatar src="https://placekitten.com/250/250" status="busy" />
    <Avatar src="https://placekitten.com/250/250" status="inactive" />
  </div>
  <h3 class="">
    Name and image
  </h3>
  <div class="flex items-end  gap-3 not-prose">
    <Avatar name="Pablo Escobar" />
    <Avatar />
    <Avatar src="https://placekitten.com/250/250" />
  </div>
  <h3 class="">
    Group
  </h3>
  <div class="avatar-group not-prose">
    <Avatar name="Pablo Escobar" status="active" />
    <Avatar />
    <Avatar src="https://placekitten.com/250/250" status="inactive" />
    <Avatar><span class="text-[0.3em]">+14</span></Avatar>
  </div>
</template>

<style scoped lang="scss">

</style>
