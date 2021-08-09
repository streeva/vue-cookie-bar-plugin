import Haven from '@chiiya/haven'
import { HavenOptions } from '@chiiya/haven/dist/types'
import _Vue from 'vue'
import CookieBar from './CookieBar.vue'
import { hasValidHavenOptions } from './helpers'

export interface CookieBarOptions {
  havenOptions: HavenOptions
}

const optionsDefaults = {
  havenOptions: {},
}

const CookieBarWrapper = {
  install(Vue: typeof _Vue, opts: CookieBarOptions): void {
    const options = { ...optionsDefaults, ...opts }

    if (!hasValidHavenOptions(options.havenOptions)) return

    // Init CookieBar
    Vue.component('CookieBar', CookieBar)

    // Init Haven
    Haven.create(options.havenOptions)

    // Add Haven and havenOptions instance property to Vue components
    Vue.prototype.$haven = Haven
    Vue.prototype.$havenOptions = options.havenOptions
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(CookieBarWrapper)
}

export default CookieBarWrapper
