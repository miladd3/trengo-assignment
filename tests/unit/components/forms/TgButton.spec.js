import { shallowMount, mount } from '@vue/test-utils';
import TgButton from '@/components/forms/TgButton';

describe('TgButton', () => {
  it('should render Button with slot', () => {
    const text = 'new message';

    const wrapper = shallowMount(TgButton, {
      slots: { default: text },
    });

    expect(wrapper.text()).toMatch(text);
  });

  it('should run click function', async () => {
    const wrapper = mount({
      components: { TgButton },
      data() {
        return { clicked: false };
      },
      template: `<TgButton @click="onClick">button</TgButton>`,
      methods: {
        onClick() {
          this.clicked = true;
        },
      },
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.vm.clicked).toBe(true);
  });
});
