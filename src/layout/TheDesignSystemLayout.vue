<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen lg:ml-72 lg:flex bg-white">
    <aside class="lg:fixed lg:flex lg:top-0 lg:left-0 lg:bottom-0 bg-white">
      <div class="w-72 p-4 lg:border-r">
        <ul>
          <li>
            <router-link to="/">
              Back to site
            </router-link>
          </li>
          <li>
            <hr class="-mx-4 my-4">
          </li>
          <li>
            <router-link :to="{ name: 'designSystem' }">
              Intro
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'designSystemColors' }">
              Colors
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'designSystemTypography' }">
              Typography
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'designSystemIcons' }">
              Icons
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'designSystemComponents' }">
              Components
            </router-link>
            <ul class="ml-4 text-sm">
              <li>
                <RouterLink :to="{ name: 'designSystemComponents', hash: '#button' }">
                  Button
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'designSystemComponents', hash: '#avatar' }">
                  Avatar
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'designSystemComponents', hash: '#badge' }">
                  Badge
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
    <main class="relative px-4 lg:grow lg:my-11 lg:px-8">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">

</style>
