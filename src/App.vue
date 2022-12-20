<script setup lang="ts">
import { RouterView } from "vue-router";
import LandingHeader from "@/components/layouts/LandingHeader.vue";
import LandingFooter from "@/components/layouts/LandingFooter.vue";
</script>

<template>
  <div :class="$props.class">
    <LandingHeader />
    <main class="main">
      <RouterView />
    </main>
    <LandingFooter />
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
}

html {
  overflow-x: hidden;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.main {
  overflow-y: visible;
  padding: 0px 6.25vw;
  min-height: 100vh;
  background: {
    color: var(--nibiru-bg-transparent);
    repeat: revert;
    size: 120%;
    position: center bottom;
    image: linear-gradient(#000000, rgba(0, 0, 0, 0));
  };
  position: relative;
}

.text {
  color: var(--nibiru-text-light);
  font-size: 1rem;

  &.--small {
    font-size: min(0.8rem, 1.1vw);
  }
  &.--stealth {
    font-size: min(1.1rem, 1.5vw);
    color: var(--n-c-stealth);
  }
}

.icon {
  width: 25px;
  height: 25px;
  background: {
    color: var(--nibiru-bg-transparent);
    size: contain;
    repeat: no-repeat;
    position: center;
  };
}

</style>
