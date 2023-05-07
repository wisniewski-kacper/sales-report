<template>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <span class="navbar-brand">Sales Report</span>

        <ul class="navbar-nav">
            <li class="{{this.$route.name === 'report' ? 'navbar-item active': 'navbar-item'}}">
                <router-link to="/report">Report</router-link>
            </li>
        </ul>
    </nav>
    <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script setup lang="ts">
</script>