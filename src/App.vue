<template>
  <nav id="nav">
    <div id="logo">
      <span>Yuri</span>
      <span v-if="isBeta"> (Beta)</span>
      <span v-if="isDev"> (Dev)</span>
    </div>
    <div id="navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isBeta: location.href.includes("yuri-configurator-beta"),
      isDev: location.href.includes("localhost"),
    };
  },
};
</script>


<style lang="scss">
//noinspection CssUnknownTarget
@import "@/assets/styles/scss/_variables.scss";

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #845d77;
}

#nav {
  padding: 30px;

  #logo {
    display: inline-block;
  }

  #navigation {
    margin-left: 2em;
    display: inline-block;
  }

  a {
    font-weight: bold;
    color: $secondary-color;

    &.router-link-exact-active {
      color: $primary-color;
    }
  }
}
</style>
