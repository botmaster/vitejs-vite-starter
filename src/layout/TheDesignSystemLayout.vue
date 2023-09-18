<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen lg:ml-72 lg:flex bg-white">
    <aside class="lg:fixed lg:flex lg:top-0 lg:left-0 lg:bottom-0 bg-white">
      <div class="w-72 p-4 lg:border-r">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="{name:'designSystem'}">Intro</router-link>
          </li>
          <li>
            <router-link :to="{name:'designSystemComponents'}">Components</router-link>
          </li>
        </ul>
      </div>
    </aside>
    <main class="relative lg:grow lg:my-11 lg:px-8">
      <router-view/>
    </main>
  </div>
</template>

<style scoped lang="scss">

</style>
