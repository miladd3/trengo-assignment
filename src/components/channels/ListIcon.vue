<template>
  <div class="tg-list-icon">
    <FontAwesomeIcon :icon="icon" />
  </div>
</template>

<script>
export default {
  name: 'ListIcon',
  props: {
    icon: {
      type: [String, Array],
      default: '',
    },
  },
};
</script>

<style scoped>
.tg-list-icon {
  @apply bg-galaxy-100 text-galaxy-800 inline-flex h-10 w-10 rounded-lg items-center justify-center text-lg;
}
</style>
