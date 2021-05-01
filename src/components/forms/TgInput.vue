<template>
  <input
    :type="type"
    class="tg-input"
    :placeholder="placeholder"
    v-model="_value"
    @change="this.$emit('change', $event)"
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
  @apply border border-gray-350 h-10 rounded-full px-4;
}

.tg-input:focus {
  @apply border-gray-500 outline-none;
}
</style>
