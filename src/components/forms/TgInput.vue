<template>
  <input
    :type="type"
    class="tg-input px-4"
    :placeholder="placeholder"
    v-model="_value"
    @change="$emit('change', $event)"
    @keyup.enter="$emit('enter', $event)"
  />
</template>

<script>
export default {
  name: 'TgInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
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

<style scoped>
.tg-input {
  @apply w-full border border-gray-350 h-10 rounded-full placeholder-gray-600;
}

.tg-input:focus {
  @apply border-gray-500 outline-none;
}
</style>
