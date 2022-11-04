<template>
  <main class="home">
    <h1 class="home-title">NIBIRU</h1>
    <div class="home-title-image-group">
      <!-- <div id="hexagonEarth"></div> -->
    </div>

    <section class="home-info-container">
      <div class="home-info-block">
        <p class="text">Unlock leverage at scale for the Cosmos ecosystem</p>
        <!-- Silencing the CTA below since we don't yet have an action for it. -->
        <!-- <HomeNotificationButton /> -->
      </div>
    </section>

    <section class="home-tiles flex flex-flow-wrap">
      <div class="home-tiles-item" href="" target="_blank">
        <span class="small-header">
          <i id="switch" class="icon"></i>
          Application
        </span>
        <p class="text">
          Access a
          <span class="--stealth">rich ecosystem </span>
          of trading protocols.
        </p>
        <button class="home-tiles-btn">Coming soon...</button>
      </div>
      <a class="home-tiles-item" href="https://docs.nibiru.fi" target="_blank">
        <span class="small-header">
          <i id="hamburger" class="icon"></i>
          DOCUMENTATION
        </span>
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
        <span class="small-header">
          <i id="search" class="icon"></i>
          EXPLORER
        </span>
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
