<script lang="ts" setup>
import { VPFeatures } from 'vitepress/theme'
import type { Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'

defineProps<{
    features: Feature[]
}>()
</script>

<template>
    <div class="custom-features">
        <VPFeatures :features="features" />
    </div>
</template>

<style>
  .custom-features h2,
  .custom-features .title {
    margin: 0;
    border-top: none;
    padding-top: 0;
    letter-spacing: 0
  }

  .custom-features p {
    margin: 0;
  }

  .custom-features a {
    text-decoration: none;
    text-underline-offset: 0;
  }

  .custom-features .VPFeatures {
    padding: 0
  }
</style>