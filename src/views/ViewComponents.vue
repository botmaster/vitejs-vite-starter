<script setup lang="ts">
import Btn from '../components/Btn.vue';
import IconCheckSvg from '../assets/svg/icon-check.svg?component';
</script>

<template>
  <div class="container mx-auto mt-24">
    <div>Components</div>
    <h2 class="mt-4 text-lg font-semibold">Colors</h2>
    <div class="flex gap-2">
      <Btn colorVariant="primary">Primary</Btn>
      <Btn colorVariant="secondary">Secondary</Btn>
      <Btn colorVariant="neutral">Neutral</Btn>
      <Btn colorVariant="primary" disabled>Disabled</Btn>
    </div>
    <h2 class="mt-4 text-lg font-semibold">Colors outlined</h2>
    <div class="flex gap-2">
      <Btn colorVariant="primary" outlined>Primary</Btn>
      <Btn colorVariant="secondary" outlined>Secondary</Btn>
      <Btn colorVariant="neutral" outlined>Neutral</Btn>
      <Btn colorVariant="primary" outlined disabled>Disabled</Btn>
    </div>
    <h2 class="mt-4 text-lg font-semibold">Sizes</h2>
    <div class="flex gap-2 items-end">
      <Btn colorVariant="primary" size="lg">Lg</Btn>
      <Btn colorVariant="primary" size="md">Md</Btn>
      <Btn colorVariant="primary" size="sm">Sm</Btn>
    </div>
    <h2 class="mt-4 text-lg font-semibold">With icons</h2>
    <div class="flex gap-2 items-end">
      <Btn colorVariant="primary" size="sm">
        <IconCheckSvg class=""></IconCheckSvg>
        <span>With icon</span>
      </Btn>
      <Btn colorVariant="primary">
        <IconCheckSvg class=""></IconCheckSvg>
        <span>With icon</span>
      </Btn>
      <Btn colorVariant="primary" size="lg">
        <IconCheckSvg class=""></IconCheckSvg>
        <span>With icon</span>
      </Btn>
    </div>
    <h2 class="mt-4 text-lg font-semibold">Loading</h2>
    <div class="flex gap-2 items-end">
      <Btn colorVariant="primary" loading>coucou</Btn>
    </div>
    <h2 class="mt-4 text-lg font-semibold">Types</h2>
    <div class="flex gap-2 items-end">
      <Btn colorVariant="primary" tag="a" href="#">Tag is a</Btn>
      <Btn
        colorVariant="primary"
        tag="input"
        type="submit"
        value="Tag is input"
      ></Btn>
    </div>
    <h2 class="mt-4 text-lg font-semibold">CSS Component</h2>
    <div class="flex gap-2 items-end">
      <button class="btn btn--primary">Button</button>
      <a href="#" class="btn btn--secondary">Html a tag</a>
    </div>
  </div>
</template>
