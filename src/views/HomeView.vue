<script setup lang="ts">
import HomeNotificationButton from "@/components/ui/HomeNotificationButton.vue";

</script>

<template>
  <section class="home">
    <h1 class="home-tittle">NIBIRU</h1>
    <div class="home-tittle-image-group">
      <div id="hexagonEarth"></div>
      <div id="sphereMGold"></div>
      <div id="sphereSGray"></div>
      <div id="hexagonMGray"></div>
    </div>

    <div class="home-info-container">
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
    </div>

    <div class="home-tiles-container">
      <div class="tiles">
          <div class="tiles-item">
            <span class="text --stealth">Application</span>
            <p>Start doing x, doing y and doing z.</p>
            <button>Launch app -></button>
          </div>
          <div class="tiles-item">
            <span class="text --stealth">DOCUMENTATION</span>
            <p>Read that, and lorem ipsum sot emet.</p>
            <button>Dig in -></button>
          </div>
          <div class="tiles-item">
            <span class="text --stealth">EXPLORER</span>
            <p>You into blocks? Explore our blocks.</p>
            <button>Explore -></button>
          </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import "../assets/home";
</style>
