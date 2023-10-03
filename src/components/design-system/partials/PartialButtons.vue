<script setup lang="ts">
import IconCheckSvg from '@svg/icon-check.svg?component';
import { Icon } from '@iconify/vue';
import Btn from '@/components/shared/Btn.vue';

const variants = [
  'default',
  'primary',
  'secondary',
  'accent',
  'neutral',
  'ghost',
  'link',
];
</script>

<template>
  <h2 id="button" class="relative">
    Buttons
    <a class="header-anchor" href="#button" aria-label="Permalink to &quot;useColorMode&quot;">​</a>
  </h2>

  <div class="lg:grid lg:grid-cols-2 lg:gap-8">
    <div>
      <h3 class="!mt-0">
        Variants
      </h3>
      <div class="flex flex-wrap gap-2 not-prose">
        <Btn v-for="variant in variants" :key="variant" :color-variant="variant">
          {{ variant.charAt(0).toUpperCase() + variant.slice(1) }}
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="!mt-0">
        Outlined
      </h3>
      <div class="flex flex-wrap gap-2 not-prose">
        <Btn v-for="variant in variants" :key="variant" :color-variant="variant" outlined>
          {{ variant.charAt(0).toUpperCase() + variant.slice(1) }}
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="!mt-0">
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
      <h3 class="!mt-0">
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
      <h3 class="!mt-0">
        Is Icon
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn size="lg" icon color-variant="">
          <Icon icon="uim:vuejs" :inline="true" />
        </Btn>
        <Btn icon color-variant="">
          <Icon icon="uim:vuejs" :inline="true" />
        </Btn>
        <Btn size="sm" icon color-variant="">
          <Icon icon="uim:vuejs" :inline="true" />
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="!mt-0">
        Loading
      </h3>
      <div class="flex gap-2 items-end not-prose">
        <Btn color-variant="primary" loading>
          coucou
        </Btn>
      </div>
    </div>
    <div>
      <h3 class="!mt-0">
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
      <h3 class="!mt-0">
        Buttons with different HTML tags
      </h3>
      <div class="flex flex-wrap gap-2 items-end not-prose">
        <a role="button" class="btn">Link</a>
        <button type="submit" class="btn">
          Button
        </button>
        <input type="button" value="Input" class="btn">
        <input type="submit" value="Submit" class="btn">
        <!--        <input type="radio" aria-label="Radio" class="btn">
        <input type="checkbox" aria-label="Checkbox" class="btn"> -->
        <input type="reset" value="Reset" class="btn">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
