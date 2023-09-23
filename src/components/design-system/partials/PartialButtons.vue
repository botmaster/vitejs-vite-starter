<script setup lang="ts">
import IconCheckSvg from '@svg/icon-check.svg?component';
import { Icon } from '@iconify/vue';
import Btn from '@/components/shared/Btn.vue';
</script>

<template>
  <h2>
    Buttons
  </h2>

  <div class="lg:grid lg:grid-cols-2 lg:gap-8">
    <div>
      <h3>
        Variants
      </h3>
      <div class="flex gap-2 not-prose">
        <Btn color-variant="primary">
          Primary
        </Btn>
        <Btn color-variant="accent">
          Accent
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
      <h3>
        Outlined
      </h3>
      <div class="flex gap-2 not-prose">
        <Btn color-variant="primary" outlined>
          Primary
        </Btn>
        <Btn color-variant="accent" outlined>
          accent
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
      <h3>
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
      <h3>
        With icons
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" size="sm">
          <IconCheckSvg />
          <span>With icon</span>
        </Btn>
        <Btn color-variant="primary">
          <IconCheckSvg />
          <span>With icon</span>
        </Btn>
        <Btn color-variant="primary" size="lg">
          <IconCheckSvg />
          <span>With icon</span>
        </Btn>
      </div>
    </div>
    <div>
      <h3>
        Is Icon
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn size="lg" icon>
          <Icon icon="uim:vuejs" :inline="true" />
        </Btn>
        <Btn icon>
          <Icon icon="uim:vuejs" :inline="true" />
        </Btn>
        <Btn size="sm" icon>
          <Icon icon="uim:vuejs" :inline="true" />
        </Btn>
      </div>
    </div>
    <div>
      <h3>
        Loading
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" loading>
          coucou
        </Btn>
      </div>
    </div>
    <div>
      <h3>
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
      <h3>
        CSS Component
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <button class="btn btn--primary">
          Button
        </button>
        <a href="#" class="btn btn--accent">Html a tag</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
