<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <div class="container mx-auto">
        <router-link to="/">
          Home
        </router-link>
        |
        <router-link :to="{ name: 'about' }">
          About us
        </router-link>
        |
        <router-link :to="{ name: 'designSystem' }">
          Design System
        </router-link>
      </div>
    </header>
    <div class="container mx-auto mt-24 flex-grow">
      <router-view />
    </div>

    <footer>
      <p>
        Je suis le footer
      </p>
    </footer>
  </div>
</template>

<style scoped lang="scss">

</style>
