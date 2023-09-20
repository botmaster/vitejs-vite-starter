<script setup lang="ts">
import Btn from "@/components/shared/Btn.vue";
import IconCheckSvg from "@svg/icon-check.svg?component";
import IconVueSvg from "@svg/icon-vue.svg?component";
</script>

<template>
  <h2 class="">Buttons</h2>

  <div class="lg:grid lg:grid-cols-2 lg:gap-8">
    <div>
      <h3 class="">Variants</h3>
      <div class="flex gap-2 not-prose">
        <Btn colorVariant="primary">Primary</Btn>
        <Btn colorVariant="secondary">Secondary</Btn>
        <Btn colorVariant="neutral">Neutral</Btn>
        <Btn colorVariant="primary" disabled>Disabled</Btn>
      </div>
    </div>
    <div>
      <h3 class="">Outlined</h3>
      <div class="flex gap-2 not-prose">
        <Btn colorVariant="primary" outlined>Primary</Btn>
        <Btn colorVariant="secondary" outlined>Secondary</Btn>
        <Btn colorVariant="neutral" outlined>Neutral</Btn>
        <Btn colorVariant="primary" outlined disabled>Disabled</Btn>
      </div>
    </div>
    <div>
      <h3 class="">Sizes</h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn colorVariant="primary" size="lg">Lg</Btn>
        <Btn colorVariant="primary" size="md">Md</Btn>
        <Btn colorVariant="primary" size="sm">Sm</Btn>
      </div>
    </div>
    <div>
      <h3 class="">With icons</h3>
      <div class="flex gap-2 items-end not-prose">
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
    </div>
    <div>
      <h3 class="">Is Icon</h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn size="lg" icon>
          <IconVueSvg class=""></IconVueSvg>
        </Btn>
        <Btn icon>
          <IconVueSvg class=""></IconVueSvg>
        </Btn>
        <Btn size="sm" icon>
          <IconVueSvg class=""></IconVueSvg>
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">Loading</h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn colorVariant="primary" loading>coucou</Btn>
      </div>
    </div>
    <div>
      <h3 class="">Types</h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn colorVariant="primary" tag="a" href="#">Tag is a</Btn>
        <Btn
            colorVariant="primary"
            tag="input"
            type="submit"
            value="Tag is input"
        ></Btn>
      </div>
    </div>
    <div>
      <h3 class="">CSS Component</h3>
      <div class="flex gap-2 items-end not-prose">
        <button class="btn btn--primary">Button</button>
        <a href="#" class="btn btn--secondary">Html a tag</a>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>
