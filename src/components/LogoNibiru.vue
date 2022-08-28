<template>
  <a class="logo-wrapper">
    <IconNibiru />
    <h4 class="logo-text">NIBIRU</h4>
  </a>
</template>

<script setup lang="ts">
import IconNibiru from "@/components/icons/IconNibiru.vue";
</script>

<style scoped lang="scss">
  .logo {
    &-wrapper {
      display: flex;
      flex-wrap: nowrap;
    }

    &-text {
      font-family: Montserrat, sans-serif;
      font-size: 22px;
      font-weight: 700;
      line-height: 32px;
      text-align: start;
      color: var(--nibiru-text-light);
    }
  }
</style>