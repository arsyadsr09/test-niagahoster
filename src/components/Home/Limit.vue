<template lang="pug">
  .limit
    b-container
      b-row
        b-col.col-option.text-center(cols="12")
          h3.text-w300 Powerful dengan Limit PHP yang Lebih Besar
      b-row.mt-30px
        b-col.col-option(cols="4" offset="2")
          b-table-simple.table-custom(striped hover)
            b-tbody
              b-tr
                b-td.px-20px.pb-5px.pt-10px
                  font-awesome-icon.success(icon="check-circle")
                b-td.px-20px.pb-5px.pt-10px
                  span Max execution time 300s
              b-tr
                b-td.px-20px.pb-5px.pt-10px
                  font-awesome-icon.success(icon="check-circle")
                b-td.px-20px.pb-5px.pt-10px
                  span Max execution time 300s
              b-tr
                b-td.px-20px.pb-5px.pt-10px
                  font-awesome-icon.success(icon="check-circle")
                b-td.px-20px.pb-5px.pt-10px
                  span PHP memory limit 1024 MB
        b-col.col-option(cols="4")
          b-table-simple.table-custom(striped hover)
            b-tbody
              b-tr
                b-td.px-20px.pb-5px.pt-10px
                  font-awesome-icon.success(icon="check-circle")
                b-td.px-20px.pb-5px.pt-10px
                  span Post max size 128 MB
              b-tr
                b-td.px-20px.pb-5px.pt-10px
                  font-awesome-icon.success(icon="check-circle")
                b-td.px-20px.pb-5px.pt-10px
                  span Upload Max file size 128MB
              b-tr
                b-td.px-20px.pb-5px.pt-10px
                  font-awesome-icon.success(icon="check-circle")
                b-td.px-20px.pb-5px.pt-10px
                  span Max input vars 2500
</template>

<script>
export default {
  name: "Limit",
  props: {}
}
</script>
