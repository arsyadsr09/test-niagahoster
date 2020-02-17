<template lang="pug">
  header
    .header-service
      b-container
        b-row
          b-col(cols='6')
            img(src='../assets/images/bookmark.png' width='30px')
            small.ml-10px.mb-10px Gratis Ebook 9 Cara Cerdas Menggunakan Domain [ x ]
          b-col(cols='6')
            .float-right.inline-header
              div.icon-service
                font-awesome-icon.mr-15px(icon="phone-alt")
                span 0274-5305505
              div.icon-service
                font-awesome-icon.mr-15px(icon="comments")
                span Live Chat
              div.icon-service
                font-awesome-icon.mr-15px(icon="user-circle")
                span Member Area
    b-navbar.header(toggleable='lg' type='light')
      b-container
        b-navbar-brand(href='#')
          img(src='../assets/images/niagahoster-logo.png' width='230px')
        b-navbar-nav.ml-auto
          b-nav-item.mx-5px(href="#") Hosting
          b-nav-item.mx-5px(href="#") Domain
          b-nav-item.mx-5px(href="#") Server
          b-nav-item.mx-5px(href="#") Website
          b-nav-item.mx-5px(href="#") Afiliasi
          b-nav-item.mx-5px(href="#") Promo
          b-nav-item.mx-5px(href="#") Pembayaran
          b-nav-item.mx-5px(href="#") Review
          b-nav-item.mx-5px(href="#") Kontak
          b-nav-item.mx-5px(href="#") Blog
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faPhoneAlt,
  faComments,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons"

library.add(faPhoneAlt, faComments, faUserCircle)
export default {
  name: "Header",
  props: {}
}
</script>
