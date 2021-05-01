import { mount, createLocalVue } from '@vue/test-utils';
import TgSearchField from '@/components/forms/TgSearchField';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
const localVue = createLocalVue();

localVue.component('FontAwesomeIcon', FontAwesomeIcon);

describe('TgSearchField', () => {
  it('should change the data with vue model', async () => {
    const wrapper = mount(
      {
        components: { TgSearchField },
        data() {
          return { text: '' };
        },
        template: `
          <TgSearchField v-model="text" />`,
      },
      { localVue }
    );

    const val = 'the test value';
    await wrapper.find('input').setValue(val);

    expect(wrapper.vm.text).toMatch(val);
  });
});
