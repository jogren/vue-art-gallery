import { mount } from '@vue/test-utils'
import Artwork from './Artwork'

describe('Artwork', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Artwork, {
      propsData: {
        image: {
          showPicture: true
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    const wrapper = mount(Artwork, {
      propsData: {
        image: {
          showPicture: true
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})