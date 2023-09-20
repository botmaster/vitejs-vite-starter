<script setup lang="ts">
import IconCheckSvg from '@svg/icon-check.svg?component';
import IconVueSvg from '@svg/icon-vue.svg?component';
import Btn from '@/components/shared/Btn.vue';
</script>

<template>
  <h2 class="">
    Buttons
  </h2>

  <div class="lg:grid lg:grid-cols-2 lg:gap-8">
    <div>
      <h3 class="">
        Variants
      </h3>
      <div class="flex gap-2 not-prose">
        <Btn color-variant="primary">
          Primary
        </Btn>
        <Btn color-variant="secondary">
          Secondary
        </Btn>
        <Btn color-variant="neutral">
          Neutral
        </Btn>
        <Btn color-variant="primary" disabled>
          Disabled
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">
        Outlined
      </h3>
      <div class="flex gap-2 not-prose">
        <Btn color-variant="primary" outlined>
          Primary
        </Btn>
        <Btn color-variant="secondary" outlined>
          Secondary
        </Btn>
        <Btn color-variant="neutral" outlined>
          Neutral
        </Btn>
        <Btn color-variant="primary" outlined disabled>
          Disabled
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">
        Sizes
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" size="lg">
          Lg
        </Btn>
        <Btn color-variant="primary" size="md">
          Md
        </Btn>
        <Btn color-variant="primary" size="sm">
          Sm
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">
        With icons
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" size="sm">
          <IconCheckSvg class="" />
          <span>With icon</span>
        </Btn>
        <Btn color-variant="primary">
          <IconCheckSvg class="" />
          <span>With icon</span>
        </Btn>
        <Btn color-variant="primary" size="lg">
          <IconCheckSvg class="" />
          <span>With icon</span>
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">
        Is Icon
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn size="lg" icon>
          <IconVueSvg class="" />
        </Btn>
        <Btn icon>
          <IconVueSvg class="" />
        </Btn>
        <Btn size="sm" icon>
          <IconVueSvg class="" />
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">
        Loading
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" loading>
          coucou
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="">
        Types
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" tag="a" href="#">
          Tag is a
        </Btn>
        <Btn
          color-variant="primary"
          tag="input"
          type="submit"
          value="Tag is input"
        />
      </div>
    </div>
    <div>
      <h3 class="">
        CSS Component
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <button class="btn btn--primary">
          Button
        </button>
        <a href="#" class="btn btn--secondary">Html a tag</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
