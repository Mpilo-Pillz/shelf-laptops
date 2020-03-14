<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import Vue from 'vue'
import AppHeader from './components/Shared/Header.vue';
import AppFooter from './components/Shared/Footer.vue';
export default Vue.extend({
  components: {
    AppHeader,
    AppFooter
  }
})
</script>
