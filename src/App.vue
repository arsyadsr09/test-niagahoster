<template lang="pug">
  Home
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import "assets/scss/index";
</style>
