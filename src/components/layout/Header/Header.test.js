import { mount } from '@vue/test-utils'
import Header from './Header'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })
})