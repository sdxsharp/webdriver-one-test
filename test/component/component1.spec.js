import { mount } from '@vue/test-utils'
import { expect } from '@wdio/globals'

import Component from '/src/Pages/component1.vue'

describe('Component 1', () => {
    it('should increase count by 1', async () => {
        const wrapper = mount(Component, { attachTo: document.body })
        expect(wrapper.find('p').text()).toBe('0')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('p').text()).toBe('1')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('p').text()).toBe('2')
    })
})