<template lang="pug">
  .service
    b-container
      b-row.mt-30px
        b-col.text-center(cols="6")
          h2 Linux Hosting yang Stabil dengan Teknologi LVE
          .detail.mt-30px
            span SuperMicro 
            b Intel Xeon 24-Cores 
            span server dengan 
            b RAM 128GB 
            span teknologi 
            b LVE CloudLinux 
            span untuk stabilitas server Anda. Dilengkapi dengan 
            b SSD 
            span untuk kecepatan 
            b MySQL 
            span dan caching, Apache load balancer berbasis LiteSpeed Technologies, 
            b CageFS 
            span security, 
            b Raid-10 
            span protection dan auto backup untuk keamanan website PHP Anda.
          b-button.mt-50px.py-8px.text-size-20.text-w500(pill variant="primary") Pilih Hosting Anda
        b-col.d-flex.justify-content-end(cols="6")
          img(src='../../assets/images/image_support.png' width='100%')
        
</template>

<script>
export default {
  name: "Service",
  props: {}
}
</script>
