import { shallowMount } from '@vue/test-utils';
import TgButton from '../../../../src/components/forms/TgButton';

describe('TgButton', () => {
  it('renders Button with slot', () => {
    const text = 'new message';

    const wrapper = shallowMount(TgButton, {
      slots: { default: text },
    });

    expect(wrapper.text()).toMatch(text);
  });
});
