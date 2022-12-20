<template>
  <main class="home">
    <h1 class="home-title">NIBIRU</h1>
    <div class="home-title-image-group"></div>

    <section class="home-info-container">
      <div class="home-info-block">
        <h2 class="text">Unlock leverage at scale for the Cosmos ecosystem</h2>
        <!-- Silencing the CTA below since we don't yet have an action for it. -->
        <!-- <HomeNotificationButton /> -->
      </div>
    </section>

    <section class="home-tiles flex flex-flow-wrap">
      <a class="home-tiles-item" href="https://app.nibiru.fi" target="_blank">
        <header class="small-header">
          <i id="switch" class="icon"></i>
          Application
        </header>
        <p class="text">
          Access a
          <span class="--stealth">rich ecosystem </span>
          of trading protocols.
        </p>
        <button class="home-tiles-btn">Launch app →</button>
      </a>
      <a class="home-tiles-item" href="https://docs.nibiru.fi" target="_blank">
        <header class="small-header">
          <i id="hamburger" class="icon"></i>
          DOCUMENTATION
        </header>
        <p class="text">
          Discover more about <span class="--stealth">Nibiru.</span>
        </p>
        <button class="home-tiles-btn">Learn →</button>
      </a>
      <a
        class="home-tiles-item"
        href="https://explorer.testnet.nibiru.fi"
        target="_blank"
      >
        <header class="small-header">
          <i id="search" class="icon"></i>
          EXPLORER
        </header>
        <p class="text">Search through</p>
        <p class="text">
          <span class="--stealth">blocks and transactions.</span>
        </p>
        <button class="home-tiles-btn">Explore →</button>
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
// import HomeNotificationButton from "@/components/ui/HomeNotificationButton.vue";
</script>

<style lang="scss">
@import "../assets/home";
</style>
