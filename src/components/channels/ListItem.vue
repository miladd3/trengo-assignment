<template>
  <div class="tg-list-item" :title="label">
    <div class="left flex h-10 w-full items-center">
      <div class="handler cursor-move mr-3 text-gray-400 flex-shrink-0">
        <FontAwesomeIcon icon="grip-vertical" v-if="!noList" />
      </div>
      <ListIcon :icon="icon" class="flex-shrink-0" />
      <div class="label font-medium ml-3 truncate max-w-full">{{ label }}</div>
    </div>
    <TgButton @click="$emit('remove', id)" class="remove-btn" v-if="!noList">
      Remove
    </TgButton>
  </div>
</template>

<script>
import ListIcon from '@/components/channels/ListIcon';
import TgButton from '@/components/forms/TgButton';
export default {
  name: 'ListItem',
  components: { TgButton, ListIcon },
  props: {
    icon: {
      type: [String, Array],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    id: {
      type: [String, Number],
      default: '',
    },
    noList: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.tg-list-item {
  @apply h-14 items-center flex justify-between pl-4 w-full bg-white;
}

.handler {
  width: 0.625rem;
}

.tg-list-item:focus {
  outline: 1px dashed #ccc;
}
.tg-list-item .left {
  width: calc(100% - 110px);
}

.tg-list-item .remove-btn {
  @apply flex-shrink-0 text-base;
}
</style>
