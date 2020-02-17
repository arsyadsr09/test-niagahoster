<template lang="pug">
  .feature
    b-container
      b-row
        b-col.col-option(cols="12")
          h3.text-w300 Semua Paket Hosting Sudah Termasuk
      b-row.mt-30px
        b-col.col-option.feature-list.my-20px(cols="4" v-for="(data, index) in featureList" :key="index")
          img(:src="data.image" width='100px')
          h5 {{data.name}}
          span {{data.detail}}
        
</template>

<script>
export default {
  name: "Feature",
  data() {
    return {
      featureList: [
        {
          image: require("@/assets/svg/Hosting_PHP.svg"),
          name: "PHP Semua Versi",
          detail:
            "Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!"
        },
        {
          image: require("@/assets/svg/Hosting_MySQL.svg"),
          name: "MySQL Versi 5.6",
          detail: "Nikmati MySQL versi terbaru, tercepat, dan kaya akan fitur."
        },
        {
          image: require("@/assets/svg/Hosting_CPanel.svg"),
          name: "Panel Hosting cPanel",
          detail:
            "Kelola Website dengan panel cangging yang familiar dihati anda."
        },
        {
          image: require("@/assets/svg/Hosting_garansi.svg"),
          name: "Garansi Uptime 99.9%",
          detail: "Data center yang mendukung kelangsungan website Anda 24/7."
        },
        {
          image: require("@/assets/svg/Hosting_InnoDB.svg"),
          name: "Databae InnoDB Unlimited",
          detail: "Jumlah dan ukuran DB yang tumbuh sesuai kebutuhan Anda."
        },
        {
          image: require("@/assets/svg/Hosting_MySQL_2.svg"),
          name: "Wildcard Remote MySQL",
          detail: "Mendukung s/d 25 mas_user-connections dan 100 max conections"
        }
      ]
    }
  }
}
</script>
