<template lang="pug">
  .intro
    b-container
      b-row
        b-col(cols="6")
          h1.title PHP Hosting
          h2.subtitle Cepat, handal, penuh dengan modul PHP yang Anda butuhkan
          .list-intro
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Solusi PHP untuk performa query yang lebih cepat
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Konsumsi memori yang lebih rendah
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Fitur enkripsi IonCube dan Zen Guard Loaders
        b-col.d-flex.justify-content-end(cols="6")
          img(src='../../assets/svg/illustration-banner-PHP-hosting-01.svg' width='90%')
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

library.add(faCheckCircle)

export default {
  name: "Intro",
  props: {}
}
</script>
