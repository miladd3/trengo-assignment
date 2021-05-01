<template>
  <form
    class="search-field relative flex items-center"
    @submit.prevent="$emit('submit', _value)"
  >
    <FontAwesomeIcon icon="search" class="absolute left-3 text-gray-450" />
    <TgInput v-model="_value" :placeholder="placeholder" class="pl-10" />
  </form>
</template>

<script>
import TgInput from '@/components/forms/TgInput';
export default {
  name: 'TgSearchField',
  components: { TgInput },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: null,
  },
  computed: {
    _value: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style scoped></style>
