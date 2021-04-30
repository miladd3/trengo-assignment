<template>
  <button
    class="tg-button font-semibold h-8 px-6 rounded-full inline-flex items-center justify-center"
    :class="{
      'bg-black text-black border-none text-white': primary,
      'border border-gray-350 text-black': outlined,
      'text-gray-500 border-none': !primary && !outlined,
    }"
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
  },
};
</script>

<style scoped></style>
