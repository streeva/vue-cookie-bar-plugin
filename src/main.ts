import Vue from 'vue'
import App from './App.vue'
import CookieBar from './plugins/CookieBar'

Vue.config.productionTip = false

Vue.use(CookieBar, {
  havenOptions: {
    domains: ['.example.com'],
    services: [
      {
        name: 'google-tag-manager',
        purposes: ['analytics'],
        type: 'google-tag-manager',
        inject: true,
        options: {
          id: 'GTM-T4P1234',
        },
      },
    ],
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
