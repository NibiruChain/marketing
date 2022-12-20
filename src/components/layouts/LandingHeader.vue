<template>
  <header class="header-wrapper">
    <RouterLink class="--plain" to="/">
      <LogoNibiru />
    </RouterLink>
    <SocialIcons class="margin-left-auto" />
    <nav>
      <ol class="nav-list">
        <li class="nav-item">
          <a href="https://github.com/NibiruChain">Code</a>
        </li>
        <li class="nav-item">
          <a href="https://docs.nibiru.fi">Docs</a>
        </li>
      </ol>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import LogoNibiru from "@/components/LogoNibiru.vue";
import SocialIcons from "@/components/layouts/SocialIcons.vue";
export default {
  name: "LandingHeader",
  components: {
    LogoNibiru,
    SocialIcons,
  },
  methods: {
    RouterLink: RouterLink,
  },
};
</script>

<style scoped lang="scss">
.header {
  &-wrapper {
    position: absolute;
    z-index: var(--layer-top);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 8px 16px;
    color: var(--nibiru-text-light);
  }
}

nav {
  background-color: var(--nibiru-bg-transparent);
  color: inherit;
  font-family: var(--font-montserrat);

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
      padding: 8px 8px;
      font-size: 16px;
      text-transform: uppercase;
      a {
        @extend .--plain;
      }
    }
  }
}

// Example: Common iPhones
@media (max-width: 550px) {
  nav {
    display: none !important;
  }
}

// Example: Galaxy Fold
@media (max-width: 325px) {
  .--plain {
    display: none !important;
  }
  .margin-left-auto {
    margin-right: auto;
  }
}

.margin-left-auto {
  margin-left: auto;
}

.--plain {
  color: inherit;
  text-decoration: none;
}
</style>
