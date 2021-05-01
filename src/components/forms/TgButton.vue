<template>
  <button
    class="tg-button"
    :class="{
      'bg-black text-black border-none text-white': primary,
      'border border-gray-350 text-black': outlined,
      'text-gray-500 border-none': !primary && !outlined,
      'bg-gray-500 text-white cursor-default': disabled,
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TgButton',
  props: {
    outlined: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.tg-button {
  @apply font-semibold h-8 px-6 rounded-full inline-flex text-sm items-center justify-center;
}
</style>
