<template>
  <main class="home">
    <h1 class="home-tittle">NIBIRU</h1>
    <div class="home-tittle-image-group">
      <div id="hexagonEarth"></div>
    </div>

    <section class="home-info-container">
      <div class="home-info-block">
        <p class="text">Unlock leverage at scale</p>
        <p class="text">for the Cosmos ecosystem</p>
        <HomeNotificationButton/>
      </div>

    </section>

    <section class="home-tiles-container">
      <div class="home-tiles">
        <div class="home-tiles-item">
            <span class="small-header">
              <i id="switch" class="icon"></i>
              Application
            </span>
          <p class="text">Access a rich ecosystem of <span class="--stealth">trading protocols.</span></p>
          <button class="home-tiles-btn">Coming soon... </button>
        </div>
        <div class="home-tiles-item">
            <span class="small-header">
              <i id="hamburger" class="icon"></i>
              DOCUMENTATION
            </span>
          <p class="text">Discover more about, <span class="--stealth">Nibiru.</span></p>
          <button class="home-tiles-btn">
            <a href="https://docs.nibiru.fi/concepts/readme">Dig in → </a>
          </button>
        </div>
        <div class="home-tiles-item">
            <span class="small-header">
              <i id="search" class="icon"></i>
              EXPLORER
            </span>
          <p class="text">Search through blocks, </p>
          <p class="text"><span class="--stealth">transactions, and other on-chain data.</span></p>
          <button class="home-tiles-btn">
            <a href="https://docs.nibiru.fi/concepts/readme">Explore → </a>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HomeNotificationButton from "@/components/ui/HomeNotificationButton.vue";
</script>

<style lang="scss">
@import "../assets/home";
</style>
