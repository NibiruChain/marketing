<template>
  <header class="header-wrapper">
    <RouterLink class="--plain" to="/"><LogoNibiru/></RouterLink>
    <nav>
      <ol class="nav-list">
        <li class="nav-item">
          <RouterLink to="/">Technology</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about">Documentation</RouterLink>
        </li>
      </ol>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import LogoNibiru from "@/components/LogoNibiru.vue";
</script>

<style scoped lang="scss">
  .header {
    &-wrapper {
      position: absolute;
      z-index: var(--layer-top);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      aspect-ratio: 10/1;
      padding: 8px 16px;
      color: var(--nibiru-text-light);
    }
  }

  nav {
    margin-left: auto;
    background-color: var(--nibiru-bg-transparent);
    color: inherit;

    .nav {
      &-list {
        display: flex;
        justify-items: flex-end;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      &-item {
        @extend .--plain;
        padding: 8px 16px;
        font-size: min(1.143rem, 1vw);
        text-transform: uppercase;
        a {
          @extend .--plain;
        }
      }
    }
  }

  .--plain {
    color: inherit;
    text-decoration: none;
  }
</style>