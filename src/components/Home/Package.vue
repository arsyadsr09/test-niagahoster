<template lang="pug">
  .package
    b-container
      b-row
        b-col.col-option.mb-20px(cols="12")
          h2 Paket Hosting Singapura yang Tepat
          h3.text-w300 Diskon 40% + Domain dan SSL Gratis untuk Anda
      b-row.mt-40px
        b-col(cols="3" v-for="(data, index) in packageList" :key="index")
          .card-custom(v-bind:class="data.type == 0 ? '' : 'selected'")
            h3(v-bind:class="data.type == 0 ? '' : 'selected'") {{data.name}}
            .hr(v-bind:class="data.type == 0 ? '' : 'selected'")
            .pt-15px(v-bind:class="data.type == 0 ? '' : 'selected'")
              span.retail-price Rp {{data.retailPrice}}
              b-row
                b-col.price-custom
                  h5.first-price Rp
                  h1.ml-5px {{data.salePrice.substr(0,2)}}
                  h5.last-price .{{data.salePrice.substr(data.salePrice.length - 3)}}
                  span.pt-8px / bln
            .hr(v-bind:class="data.type == 0 ? '' : 'selected'")
            .pt-5px.pb-5px(v-bind:class="data.type == 0 ? '' : 'selected-primary'")
              small
                b {{data.users}}
                span  Pengguna Terdaftar 
            .hr(v-bind:class="data.type == 0 ? '' : 'selected'")
            .p-20px.black
              span.bold.mb-10px {{data.resource}}X RESOURCE POWER
              div.feature-list(v-for="(list, index) in data.feature" :key="index")
                div.blue(v-if="list.bold === 'star'")
                  font-awesome-icon.mr-5px(icon="star")
                  font-awesome-icon.mr-5px(icon="star")
                  font-awesome-icon.mr-5px(icon="star")
                  font-awesome-icon.mr-5px(icon="star")
                  font-awesome-icon.mr-5px(icon="star")
                div(v-else)
                  span.bold {{list.bold}}
                  span  {{list.text}}
            .pb-20px
              b-button.py-8px(pill variant="outline-secondary" v-if="!data.disc && data.type == 0") Pilih Sekarang!
              b-button.py-8px(pill variant="primary" v-else-if="!data.disc && data.type == 1") Pilih Sekarang!
              b-button.py-8px(pill variant="outline-secondary" v-else-if="data.disc && data.type == 0") Diskon 40%
              b-button.py-8px(pill variant="primary" v-else) Diskon 40%
          .badge-selected(v-show="data.type == 1")
            img(src='../../assets/images/best_seller_badge.png' width='100px')
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core"
import { faStar } from "@fortawesome/free-solid-svg-icons"

library.add(faStar)

export default {
  name: "Package",
  data() {
    return {
      packageList: [
        {
          name: "Bayi",
          retailPrice: "19.900",
          salePrice: "14.900",
          users: "938",
          resource: "0.5",
          type: 0,
          disc: false,
          feature: [
            {
              bold: "500 MB",
              text: "Disk Space"
            },
            {
              bold: "Unlimited",
              text: "Bandwidth"
            },
            {
              bold: "Unlimited",
              text: "Databases"
            },
            {
              bold: "1",
              text: "Domain"
            },
            {
              bold: "Instant",
              text: "Backup"
            },
            {
              bold: "Unlimited SSL",
              text: "Gratis Selamanya"
            }
          ]
        },
        {
          name: "Pelajar",
          retailPrice: "46.900",
          salePrice: "23.450",
          users: "4.168",
          resource: "1",
          type: 0,
          disc: false,
          feature: [
            {
              bold: "Unlimited",
              text: "Disk Space"
            },
            {
              bold: "Unlimited",
              text: "Bandwidth"
            },
            {
              bold: "Unlimited",
              text: "Databases"
            },
            {
              bold: "Unlimited",
              text: "POP3 Email"
            },
            {
              bold: "10",
              text: "Addon Domain"
            },
            {
              bold: "Instant",
              text: "Backup"
            },
            {
              bold: "Domain Gratis",
              text: "Selamanya"
            },
            {
              bold: "Unlimited SSL",
              text: "Gratis Selamanya"
            }
          ]
        },
        {
          name: "Personal",
          retailPrice: "58.900",
          salePrice: "38.900",
          users: "10.017",
          resource: "2",
          type: 1,
          disc: false,
          feature: [
            {
              bold: "Unlimited",
              text: "Disk Space"
            },
            {
              bold: "Unlimited",
              text: "Bandwidth"
            },
            {
              bold: "Unlimited",
              text: "Databases"
            },
            {
              bold: "Unlimited",
              text: "POP3 Email"
            },
            {
              bold: "Unlimited",
              text: "Addon Domain"
            },
            {
              bold: "Instant",
              text: "Backup"
            },
            {
              bold: "Domain Gratis",
              text: "Selamanya"
            },
            {
              bold: "Unlimited SSL",
              text: "Gratis Selamanya"
            },
            {
              bold: "Private",
              text: "Name Server"
            },
            {
              bold: "Spam Assassin",
              text: "Mail Protection"
            }
          ]
        },
        {
          name: "Bisnis",
          retailPrice: "109.900",
          salePrice: "65.900",
          users: "3.552",
          resource: "3",
          type: 0,
          disc: true,
          feature: [
            {
              bold: "Unlimited",
              text: "Disk Space"
            },
            {
              bold: "Unlimited",
              text: "Bandwidth"
            },
            {
              bold: "Unlimited",
              text: "Databases"
            },
            {
              bold: "Unlimited",
              text: "POP3 Email"
            },
            {
              bold: "Unlimited",
              text: "Addon Domain"
            },
            {
              bold: "Magic Auto",
              text: "Backup & Restore"
            },
            {
              bold: "Domain Gratis",
              text: "Selamanya"
            },
            {
              bold: "Unlimited SSL",
              text: "Gratis Selamanya"
            },
            {
              bold: "Private",
              text: "Name Server"
            },
            {
              bold: "star",
              text: "star"
            },
            {
              bold: "Spam Expert",
              text: "Pro Mail Protection"
            }
          ]
        }
      ]
    }
  }
}
</script>
