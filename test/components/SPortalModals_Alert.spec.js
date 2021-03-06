import MutationObserver from 'mutation-observer'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PortalVue, { Wormhole } from 'portal-vue'
import Sefirot from 'sefirot/store/Sefirot'
import SPortalModals from 'sefirot/components/SPortalModals'

global.MutationObserver = MutationObserver
Wormhole.trackInstances = false

const localVue = createLocalVue()

localVue.use(Vuex)

localVue.use(PortalVue)

describe('Components - Portals - SPortalModals - Alert', () => {
  let store = {}
  let wrapper = {}

  beforeAll(() => {
    store = new Vuex.Store({
      plugins: [Sefirot]
    })

    wrapper = mount(SPortalModals, { localVue, store })
  })

  test('it can open and close a info alert', async () => {
    store.dispatch('alert/open', {
      title: 'Alert title.',
      text: 'Alert message.',
      actions: [
        { type: 'mute', label: 'MUTE ACTION', callback: () => {} },
        { mode: 'info', label: 'PRIMARY ACTION', callback: () => {} }
      ]
    })

    await localVue.nextTick()

    expect(wrapper.findAll('.SPortalModals .SAlert.info').length).toBe(1)

    store.dispatch('alert/close')
  })

  test('it can open and close a success alert', async () => {
    store.dispatch('alert/open', {
      type: 'success',
      title: 'Alert title.',
      text: 'Alert message.',
      actions: [
        { type: 'mute', label: 'MUTE ACTION', callback: () => {} },
        { mode: 'success', label: 'PRIMARY ACTION', callback: () => {} }
      ]
    })

    await localVue.nextTick()

    expect(wrapper.findAll('.SPortalModals .SAlert.success').length).toBe(1)

    store.dispatch('alert/close')
  })

  test('it can open and close a warning alert', async () => {
    store.dispatch('alert/open', {
      type: 'warning',
      title: 'Alert title.',
      text: 'Alert message.',
      actions: [
        { type: 'mute', label: 'MUTE ACTION', callback: () => {} },
        { mode: 'warning', label: 'PRIMARY ACTION', callback: () => {} }
      ]
    })

    await localVue.nextTick()

    expect(wrapper.findAll('.SPortalModals .SAlert.warning').length).toBe(1)

    store.dispatch('alert/close')
  })

  test('it can open and close a danger alert', async () => {
    store.dispatch('alert/open', {
      type: 'danger',
      title: 'Alert title.',
      text: 'Alert message.',
      actions: [
        { type: 'mute', label: 'MUTE ACTION', callback: () => {} },
        { mode: 'danger', label: 'PRIMARY ACTION', callback: () => {} }
      ]
    })

    await localVue.nextTick()

    expect(wrapper.findAll('.SPortalModals .SAlert.danger').length).toBe(1)

    store.dispatch('alert/close')
  })

  test('it can open and close a error alert', async () => {
    store.dispatch('alert/open', {
      type: 'error',
      title: 'Alert title.',
      text: 'Alert message.',
      actions: [
        { type: 'mute', label: 'MUTE ACTION', callback: () => {} },
        { mode: 'error', label: 'PRIMARY ACTION', callback: () => {} }
      ]
    })

    await localVue.nextTick()

    expect(wrapper.findAll('.SPortalModals .SAlert.error').length).toBe(1)

    store.dispatch('alert/close')
  })
})
