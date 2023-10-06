<script setup lang="ts">
import PhoneFrame from '@/components/PhoneFrame.vue';
import AppButton from '@/components/shared/AppButton.vue';
</script>

<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
    <div class="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6 xl:col-span-6">
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
    <div class="lg:col-span-6 relative">
      <div class=" -mx-4 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] h-[448px] lg:-bottom-20 lg:-inset-x-10 lg:-top-10 lg:absolute lg:h-auto  lg:pt-10 lg:px-0 px-9 sm:mx-0 xl:-bottom-32">
        <PhoneFrame class="max-w-[366px] mx-auto drop-shadow-phone-frame" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
