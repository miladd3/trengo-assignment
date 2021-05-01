import { mount, createLocalVue } from '@vue/test-utils';
import SearchField from '@/components/forms/SearchField';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
const localVue = createLocalVue();

localVue.component('FontAwesomeIcon', FontAwesomeIcon);

describe('SearchField', () => {
  it('should change the data with vue model', async () => {
    const wrapper = mount(
      {
        components: { SearchField },
        data() {
          return { text: '' };
        },
        template: `<SearchField v-model="text" />`,
      },
      { localVue }
    );

    const val = 'the test value';
    await wrapper.find('input').setValue(val);

    expect(wrapper.vm.text).toMatch(val);
  });
});
