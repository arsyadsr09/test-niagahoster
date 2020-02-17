<template lang="pug">
  .footer
    b-container
      b-row
        b-col.col-option(cols="3")
          span.title-footer HUBUNGI KAMI
          span 0274-5305505
          span Senin - Minggu
          span 24 Jam Nonstop
          br
          span Jl. Selokan Mataram Monjali
          span Karangjati MT I/304
          span Sinduadi, Mlati, Sleman
          span Yogyakarta 55284
        b-col.col-option(cols="3")
          span.title-footer LAYANAN
          span Domain
          span Shared Hosting
          span Cloud VPS Hosting
          span Managed VPS Hosting
          span Web Builder
          span Keamanan SSL / HTTPS
          span Jasa Pembuatan Website
          span Program Afiliasi
        b-col.col-option(cols="3")
          span.title-footer SERVICE HOSTING
          span Hosting Murah
          span Hosting Indonesia
          span Hosting Singapura SG
          span Hosting PHP
          span Hosting Wordpress
          span Hosting Laravel
        b-col.col-option(cols="3")
          span.title-footer TUTORIAL
          span Knowledgebase
          span Blog
          span Cara Pembayaran
      b-row.mt-70px
        b-col.col-option(cols="3")
          span.title-footer TENTANG KAMI
          span Tim Niagahoster
          span Karir
          span Events
          span Penawaran & Promo Spesial
          span Kontak Kami
        b-col.col-option(cols="3")
          span.title-footer KENAPA PILIH NIAGAHOSTER?
          span Support Terbaik
          span Garansi Harga Termurah
          span Domain Gratis Selamanya
          span Data Center Hosting Terbaik
          span Review Pelanggan
        b-col.col-option(cols="3")
          span.title-footer NEWSLETTER
          b-row.rounded-input-group.ml-3px
            b-col.p-0px.m-0px(cols="7")
              b-form-input.input-custom(placeholder="Email")
            b-col.p-0px.m-0px(cols="5")
                b-button.ml-auto.py-10px.px-5px.text-size-14(pill variant="primary") Berlangganan
          span.thin.mt-10px Dapatkan promo dan konten menarik dari penyedia hosting terbaik Anda.
        b-col.socials(cols="3")
          b-button.social-button.p-10px(pill variant="outline-secondary")
            img.mx-6px(src='../assets/svg/facebook-f-brands.svg' width='13px')
          b-button.social-button.p-10px(pill variant="outline-secondary")
            img.mx-2px(src='../assets/svg/twitter-brands.svg' width='20px')
          b-button.social-button.p-10px(pill variant="outline-secondary")
            img(src='../assets/svg/google-plus-g-brands.svg' width='25px')
      b-row.mt-70px.mb-40px
        b-col.col-option(cols="12")
          span.title-footer Pembayaran
          .d-inline-flex.mb-20px
            .mr-5px(v-for="(data, index) in paymentList" :key="index")
              img(:src='data' height='35px')
          span.thin Aktivasi instan dengan e-Payment. Hosting dan domain langsung aktif
      .hr.mb-20px
      b-row
        b-col(cols="10")
          small Copyright ©2016 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta
          br
          small Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology
        b-col(cols="2")
          small Syarat | Ketentuan
</template>

<script>
export default {
  name: "Tech",
  data() {
    return {
      paymentList: [
        require("@/assets/svg/logo-bca-bordered.svg"),
        require("@/assets/svg/logo-bni-bordered.svg"),
        require("@/assets/svg/alto.svg"),
        require("@/assets/svg/atmbersama.svg"),
        require("@/assets/svg/bri.svg"),
        require("@/assets/svg/logo-gopay.svg"),
        require("@/assets/svg/mandiriclickpay.svg"),
        require("@/assets/svg/mastercard.svg"),
        require("@/assets/svg/paypal.svg"),
        require("@/assets/svg/permatabank.svg"),
        require("@/assets/svg/prima.svg"),
        require("@/assets/svg/visa.svg")
      ]
    }
  }
}
</script>
