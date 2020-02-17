<template lang="pug">
  div
    .share
      b-container
        b-row
          b-col.d-flex.align-items-center(cols="6")
            h6 Bagikan jika Anda menyukai halaman ini.
          b-col.d-flex.justify-content-end(cols="6")
            div.mr-25px
              img.mr-10px(src='../../assets/svg/facebook-square-brands.svg' width='30px')
              b-badge(variant="secondary")
                span 80k
            div.mr-25px
              img.mr-10px(src='../../assets/svg/twitter-square-brands.svg' width='30px')
              b-badge(variant="secondary")
                span 450
            div.mr-25px
              img.mr-10px(src='../../assets/svg/google-plus-square-brands.svg' width='30px')
              b-badge(variant="secondary")
                span 12.4k
    .help
      b-container
        b-row
          b-col(cols="9")
            h2 Perlu 
              b BANTUAN 
              span Hubungi Kami : 
              b 0274-5305505
          b-col.d-flex.justify-content-end(cols="3")
            b-button.py-8px.text-size-20.text-w500.button(pill variant="outline-secondary")
              font-awesome-icon.mr-15px(icon="comment")
              span Live Chat
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { faComment } from "@fortawesome/free-solid-svg-icons"

library.add(faComment)

export default {
  name: "Tech",
  props: {}
}
</script>
