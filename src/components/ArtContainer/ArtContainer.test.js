import { mount } from '@vue/test-utils'
import ArtContainer from './ArtContainer'

describe('ArtContainer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ArtContainer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(ArtContainer)
    expect(wrapper.element).toMatchSnapshot()
  })
})