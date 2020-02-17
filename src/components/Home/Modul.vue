<template lang="pug">
  .modul
    b-container
      b-row
        b-col.col-option(cols="12")
          h3.text-w300 Modul Lengkap untuk Menjalankan Aplikasi PHP Anda
      b-row.mt-30px
        b-col(cols="10" offset="1")
          b-row
            b-col(cols="3"  v-for="(data, index) in modulList" :key="index")
              span {{data}}
      b-row.mt-50px
        b-col.col-option(cols="12")
          b-button.py-8px(pill variant="outline-secondary") Selengkapnya
</template>

<script>
export default {
  name: "Modul",
  data() {
    return {
      modulList: [
        "IcePHP",
        "http",
        "nd_pdo_mysql",
        "stats",
        "apc",
        "huffman",
        "oauth",
        "stem",
        "apcu",
        "idn",
        "oci8",
        "stomp",
        "apm",
        "odbc",
        "suhosin",
        "igbinary",
        "odbc",
        "suhosin",
        "ares",
        "imagick",
        "opcache",
        "sybase_ct",
        "bcmath",
        "bcompiler",
        "big_int",
        "bitset",
        "bloomy",
        "bz2_filter",
        "clamav",
        "coin_acceptor",
        "crack",
        "dba",
        "imap",
        "inclued",
        "inotify",
        "interbase",
        "intl",
        "ioncube_loader",
        "ioncube_loader_4",
        "jsmin",
        "json",
        "ldap",
        "opcache",
        "pdf",
        "pdo",
        "pdo_dblib",
        "pdo_firebird",
        "pdo_mysql",
        "pdo_odbc",
        "pdo_pgsql",
        "pdo_sqlite",
        "pgsql",
        "phalcon",
        "sybase_ct",
        "sysvmsg",
        "sysvsem",
        "syvshm",
        "tidy",
        "timezonedb",
        "trader",
        "translit",
        "uploadprogress",
        "uri_template",
        "uuid"
      ]
    }
  }
}
</script>
