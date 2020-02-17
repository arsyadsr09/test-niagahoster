<template lang="pug">
  .tech
    b-container
      b-row
        b-col.col-option(cols="8" offset="2")
          .list
            img(src='../../assets/images/zendguard.png' width='200px')
            span PHP Zend Guard Loader
          .list
            img(src='../../assets/images/composer.png' width='200px')
            span PHP Composer
          .list
            img(src='../../assets/images/ion-cube.png' width='200px')
            span PHP ionCub Loader
        
</template>

<script>
export default {
  name: "Tech",
  props: {}
}
</script>
