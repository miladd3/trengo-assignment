import { mount } from '@vue/test-utils';
import TgInput from '@/components/forms/TgInput';

describe('TgInput', () => {
  it('should change the data with vue model', async () => {
    const wrapper = mount({
      components: { TgInput },
      data() {
        return { text: '' };
      },
      template: `<TgInput v-model="text" />`,
    });

    const val = 'the test value';
    await wrapper.find('input').setValue(val);

    expect(wrapper.vm.text).toMatch(val);
  });
});
