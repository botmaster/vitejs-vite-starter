<script setup lang="ts">
import { useMouse } from '@vueuse/core';
import PhoneFrame from '@/components/PhoneFrame.vue';
import AppButton from '@/components/shared/AppButton.vue';

// tracks mouse position
const { x, y } = useMouse();
</script>

<template>
  <div class="hero">
    <div class="hero__main">
      <h1 class="text-4xl font-medium tracking-tight text-gray-900">
        I'm a Hero!
      </h1>
      <p class="mt-6 text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad cum, distinctio esse eum iste laudantium, libero, maiores modi optio quidem quo ratione recusandae sed similique sint sit tenetur voluptate.
      </p>
      <p class="mt-6 lg:mt-14">
        <AppButton color-variant="primary" size="lg">
          Get started
        </AppButton>
      </p>
    </div>
    <div class="hero__illustration">
      <div class="-mx-4 [mask-image:linear-gradient(to_bottom,#F8F9FAFF_70%,transparent)] h-[448px] lg:-bottom-20 lg:-inset-x-10 lg:-top-10 lg:absolute lg:h-auto  lg:pt-10 lg:px-0 px-9 sm:mx-0 xl:-bottom-32">
        <PhoneFrame class="max-w-[366px] mx-auto drop-shadow-phone-frame">
          <div class="py-8 px-5 text-gray-100">
            <p><code>Mouse position: {{ x }}, {{ y }}</code></p>
          </div>
        </PhoneFrame>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  @apply lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20;

  &__main {
    @apply relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6 xl:col-span-6;
  }

  &__illustration {
    @apply lg:col-span-6 relative;
  }
}
</style>
