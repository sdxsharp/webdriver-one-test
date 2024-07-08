import { mount } from '@vue/test-utils'
import { expect } from '@wdio/globals'

import Component from '/src/Pages/component2.vue'

describe('Component 2', () => {
    it('should increase count by 1', async () => {
        const wrapper = mount(Component, { attachTo: document.body })
        expect(wrapper.find('p').text()).toBe('no')
        await wrapper.find('input[type="checkbox"]').setValue(true)
        expect(wrapper.find('p').text()).toBe('yes')
        await wrapper.find('input[type="checkbox"]').setValue(false)
        expect(wrapper.find('p').text()).toBe('no')
    })
})