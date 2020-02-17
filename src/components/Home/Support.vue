<template lang="pug">
  .support
    b-container
      b-row
        b-col.col-option(cols="12")
          h3.text-w300 Mendukung Penuh Framework Laravel
      b-row.mt-30px
        b-col(cols="6")
          h5 Tak perlu menggunakan dedicated server maupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda
          .list-support
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Install Laravel 
                b 1 klik 
                span dengan Softaculous Installer.
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Mendukung ekstensi 
                b PHP MCrypt, Phar, Mbstring, JSON,
                span dan 
                b fileinfo.
            .list
              font-awesome-icon.check-green.mr-15px(icon="check-circle")
              span Tersedia 
                b Composer 
                span dan 
                b SSH 
                span untuk menginstal package pilihan Anda.
          .mt-20px
            small Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis
          b-button.mt-40px.py-8px.text-size-20.text-w500(pill variant="primary") Pilih Hosting Anda
        b-col.d-flex.justify-content-end(cols="6")
          img(src='../../assets/svg/illustration-banner-support-laravel-hosting.svg' width='90%')
        
</template>

<script>
export default {
  name: "Support",
  props: {}
}
</script>
