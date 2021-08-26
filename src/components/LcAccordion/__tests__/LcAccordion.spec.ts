import { mount } from '@vue/test-utils'
import LcAccordion from '../LcAccordion'

let wrapper: any

afterEach(() => {
  wrapper?.unmount()
})

describe('LcAccordion', () => {
  it('is a Vue instance', () => {
    wrapper = mount(LcAccordion)
    expect(wrapper.vm).toBeTruthy()
  })
})
