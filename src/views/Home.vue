<template lang="pug">
  div
    Header
    Intro
    Tech
    Package
    Limit
    Feature
    Support
    Modul
    Service
    HelpAndShare
    Footer
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Intro from "../components/Home/Intro.vue"
import Tech from "../components/Home/Tech.vue"
import Package from "../components/Home/Package.vue"
import Limit from "../components/Home/Limit.vue"
import Feature from "../components/Home/Feature.vue"
import Support from "../components/Home/Support.vue"
import Modul from "../components/Home/Modul.vue"
import Service from "../components/Home/Service.vue"
import HelpAndShare from "../components/Home/HelpAndShare.vue"

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Intro,
    Tech,
    Package,
    Limit,
    Feature,
    Support,
    Modul,
    Service,
    HelpAndShare
  }
}
</script>
