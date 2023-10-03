<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const  { t } = useI18n();
</script>

<template>
  <div class="flex flex-col h-screen">
    <header>
      <div class="container mx-auto">
        <router-link to="/">
          {{ t('navMain.home') }}
        </router-link>
        |
        <router-link :to="{ name: 'tasks' }">
          {{ t('navMain.tasks') }}
        </router-link>
        |
        <router-link :to="{ name: 'about' }">
          {{ t('navMain.about') }}
        </router-link>
        |
        <router-link :to="{ name: 'designSystem' }">
          {{ t('navMain.designSystem') }}
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
