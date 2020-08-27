<template>
  <div>
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  components: {
    navbar: Navbar,
  }
}
</script>

<style>
</style>
