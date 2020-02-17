import Vue from "vue"
import App from "./App.vue"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App)
}).$mount("#app")
