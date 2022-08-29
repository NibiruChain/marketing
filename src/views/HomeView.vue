<script setup lang="ts">
import HomeNotificationButton from "@/components/ui/HomeNotificationButton.vue";

</script>

<template>
  <main class="home">
    <h1 class="home-tittle">NIBIRU</h1>
    <div class="home-tittle-image-group">
      <div id="hexagonEarth"></div>
      <div id="sphereMGold"></div>
      <div id="sphereSGray"></div>
      <div id="hexagonMGray"></div>
    </div>

    <section class="home-info-container">
      <div class="home-info-block">
        <p class="text">Unlock leverage at scale</p>
        <p class="text">for the Cosmos ecosystem</p>
        <HomeNotificationButton/>
      </div>
      <div class="home-info-block">
        <div class="home-info-item">
          <i id="globe" class="icon"></i>
          <div class="text-wrap">
            <p class="text">99.99%</p>
            <span class="text --stealth">Lorem ipsum</span>
          </div>
        </div>
        <div class="home-info-item">
          <i id="energy" class="icon"></i>
          <div class="text-wrap">
            <p class="text">&#60;2s per block</p>
            <span class="text --stealth">Lightning quick</span>
          </div>
        </div>
      </div>
    </section>

    <section class="home-tiles-container">
      <div class="home-tiles">
        <div class="home-tiles-item">
            <span class="small-header">
              <i id="switch" class="icon"></i>
              Application
            </span>
          <p class="text">Start doing x, <span class="--stealth">doing y and doing z.</span></p>
          <button class="home-tiles-btn">Launch app → </button>
        </div>
        <div class="home-tiles-item">
            <span class="small-header">
              <i id="hamburger" class="icon"></i>
              DOCUMENTATION
            </span>
          <p class="text">Read that, <span class="--stealth">and lorem ipsum sot emet.</span></p>
          <button class="home-tiles-btn">Dig in → </button>
        </div>
        <div class="home-tiles-item">
            <span class="small-header">
              <i id="search" class="icon"></i>
              EXPLORER
            </span>
          <p class="text">You into blocks?</p>
          <p class="text"><span class="--stealth">Explore our blocks.</span></p>
          <button class="home-tiles-btn">Explore → </button>
        </div>
      </div>
    </section>
    <div id="sphereLGold"></div>

  </main>
</template>

<style lang="scss">
  @import "../assets/home";
</style>
