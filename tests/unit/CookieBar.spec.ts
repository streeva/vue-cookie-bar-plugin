import { shallowMount } from '@vue/test-utils'
import CookieBar from '@/plugins/CookieBar/CookieBar.vue'

let wrapper: any

describe('CookieBar.vue', () => {
  beforeAll(() => {
    wrapper = shallowMount(CookieBar)
  })

  it('renders overlay', () => {
    const overlay = wrapper.find('overlay-stub')
    expect(overlay.exists()).toBe(true)
  })

  it('renders cookie bar container', () => {
    const cookieNotification = wrapper.findAll('div').at(0)

    expect(cookieNotification).toMatchSnapshot()
  })

  it('has required element with cookie-notification id for Haven', () => {
    const requiredElement = wrapper.find('#cookie-notification')

    expect(requiredElement.exists()).toBe(true)
  })

  it('has required element with cookie-notification__accept id for Haven', () => {
    const requiredElement = wrapper.find('#cookie-notification__accept')

    expect(requiredElement.exists()).toBe(true)
  })

  it('has required element with cookie-notification__decline id for Haven', () => {
    const requiredElement = wrapper.find('#cookie-notification__decline')

    expect(requiredElement.exists()).toBe(true)
  })
})
