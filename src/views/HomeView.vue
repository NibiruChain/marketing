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

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 24px;
  font-family: var(--font-geometric);
  --mobile-max-width: 95vw;

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    border: 1px solid #F0F0F0;
    background: #1F1F1F;
  }
  button:hover {
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    cursor: pointer;
  }

  &-title {
    font-family: "Phonk", "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22vw;
    line-height: 1.2;
    background: var(--nibiru-text-main-grad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &-image-group {
      position: absolute;
      z-index: var(--layer-ground);
      top: 60px;
      left: 20px;
      right: 20px;
      bottom: 100px;
      max-width: 100%;

      > div {
        position: absolute;

        background: {
          color: var(--nibiru-bg-transparent);
          size: contain;
          repeat: no-repeat;
          position: center;
        }
      }

      #hexagonEarth {
        width: 65vw;
        aspect-ratio: 4/3;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        background-image: url("@/assets/img/hexagon-earth-straight.png");
      }

      #figureTorus {
        top: 10vh;
        width: 50vw;
        margin-left: 20%;
        aspect-ratio: 717/415;
        background-image: url("@/assets/img/figure-torus.png");
      }

      #sphereMGold {
        top: 1vh;
        right: 30vw;
        width: 70px;
        aspect-ratio: 1/1;
        background-image: url("@/assets/img/sphere-middle-gold.png");
      }

      #sphereSGray {
        left: 20vw;
        top: 20vh;
        width: 30px;
        aspect-ratio: 1/1;
        background-image: url("@/assets/img/sphere-small-gray.png");
      }

      #hexagonMGray {
        left: 25vw;
        top: max(45vh, 40vw);
        width: 250px;
        aspect-ratio: 1/1;
        background-image: url("@/assets/img/hexagon-m-gray.png");
      }
    }
  }

  &-info {
    &-container {
      position: relative;
      z-index: var(--layer-first);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;

      width: calc((var(--tiles-item-width) * 3) + (2 * var(--tiles-item-col-gap)));
      max-width: var(--mobile-max-width);
      margin: 0 auto;
    }

    &-block {
      &:first-child > .text {
        font-size: 27px;
        line-height: 1.1;
        width: 357px;
        max-width: calc(var(--mobile-max-width) - 4vw);
      }
    }

    &-item {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 8px 16px;

      .icon {
        display: block;
        width: 25px;
        height: 25px;
        margin-right: 8px;

        background: {
          color: var(--nibiru-bg-transparent);
          size: contain;
          repeat: no-repeat;
          position: center;
        }
      }

      #globe {
        background-image: url("@/assets/icons/globe.png");
      }

      #energy {
        background-image: url("@/assets/icons/energy.png");
      }
    }
  }

  --tiles-item-height: 255px;
  --tiles-item-col-gap: 22px;
  --tiles-item-width: calc(1.4 * var(--tiles-item-height));

  &-tiles {
    z-index: var(--layer-first);
    row-gap: 18px;
    column-gap: 22px;
    margin-top: 3.5rem;
    margin-bottom: 40px;

    &-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: var(--tiles-item-height);
      min-height: calc(var(--tiles-item-height) * 8 / 9);
      width: var(--tiles-item-width);
      max-width: var(--mobile-max-width);
      padding: 24px;
      border-radius: 20px;
      background: linear-gradient(180deg, #2b2b2b 0%, #000000 100%);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    }

    .small-header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 12%;
      height: 12%;

      font-family: var(--font-geometric);
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
      text-align: start;

      text-transform: uppercase;
      color: var(--n-c-stealth);

      .icon {
        display: block;
        width: 25px;
        height: 25px;
        margin-right: 8px;

        background: {
          color: var(--nibiru-bg-transparent);
          size: 60%;
          repeat: no-repeat;
          position: center;
        }

        &#switch {
          background-image: url("@/assets/icons/switch.png");
        }

        &#hamburger {
          background-image: url("@/assets/icons/hamburger-align-left.png");
        }

        &#search {
          background-image: url("@/assets/icons/search.png");
        }
      }
    }

    .text {
      font-family: URW Geometric Extended, sans-serif;
      font-size: 27px;
      font-weight: 800;
      line-height: 1.2;
      text-align: start;

      .--stealth {
        color: var(--n-c-stealth);
      }
    }

    &-btn {
      display: flex;
      margin-top: auto;
      padding: 8px 16px 8px 0;
      border: 0;
      outline: 0;
      color: var(--nibiru-text-light);
      background: var(--nibiru-bg-transparent);

      font-family: var(--font-geometric);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      text-align: start;

      > a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  #sphereLGold {
    position: absolute;
    z-index: var(--layer-ground);
    right: -5vw;
    bottom: 0;
    width: max(25vw, 25vh);
    aspect-ratio: 1/1;

    background: {
      color: var(--nibiru-bg-transparent);
      size: contain;
      repeat: no-repeat;
      position: center;
      image: url("@/assets/img/sphere-large-gold.png");
    }
  }
}
</style>
