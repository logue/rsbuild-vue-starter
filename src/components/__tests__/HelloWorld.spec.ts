import { describe, expect, it } from '@rstest/core';

import { mount } from '@vue/test-utils';

import HelloWorld from '@/HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Rstest',
      },
    });
    expect(wrapper.text()).toContain('Hello Rstest');
  });
});
