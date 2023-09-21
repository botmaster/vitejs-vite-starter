<script setup lang="ts">
import { Icon } from "@iconify/vue";
import IconAccessibility from "~icons/carbon/accessibility";
import IconAccountBox from "~icons/mdi/account-box";
import IcBaselineAirplanemodeActive from "~icons/ic/baseline-airplanemode-active";
import TwemojiAbButtonBloodType from "~icons/twemoji/ab-button-blood-type";
</script>

<template>
  <div class="prose lg:prose-xl">
    <h1 class="">Icons</h1>
    <p class="not-prose text-base">
      <span>Lorem ipsum dolor sit amet.</span>
      <IconAccessibility />
      <IconAccountBox />
      <IcBaselineAirplanemodeActive />
      <TwemojiAbButtonBloodType />
    </p>
    <p class="not-prose text-base">
      <span>Lorem ipsum dolor sit amet.</span>
      <Icon icon="mdi:account-box" :inline="true" />
      <Icon icon="ic:baseline-airplanemode-active" :inline="true" />
      <Icon icon="twemoji:ab-button-blood-type" :inline="true" />
      <Icon icon="twemoji:ab-button-blood-type" :inline="true" />
      <Icon icon="twemoji:ab-button-blood-type" :inline="true" mode="svg" />
    </p>
  </div>
</template>
