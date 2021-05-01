<template>
  <div
    class="channel-manager max-w-xl p-4 border border-gray-350 rounded-xl w-full shadow"
  >
    <TgSearchField placeholder="hello" />
    <List class="mt-3" :items="items" @change="onChange" @remove="onRemove" />

    <div class="actions flex flex-row-reverse pt-3">
      <TgButton primary class="ml-2">Apply</TgButton>
      <TgButton outlined>Cancel</TgButton>
    </div>
  </div>
</template>

<script>
import TgSearchField from '@/components/forms/TgSearchField';
import List from '@/components/channels/List';
import TgButton from '@/components/forms/TgButton';
export default {
  name: 'ChannelManager',
  components: { TgButton, List, TgSearchField },
  data() {
    return {
      items: [
        { id: 1, icon: ['fab', 'whatsapp'], label: 'hello' },
        { id: 3, icon: ['fab', 'whatsapp'], label: 'hello' },
        { id: 4, icon: ['fab', 'whatsapp'], label: 'hello' },
        {
          id: 2,
          icon: 'phone',
          label: '(test) development California (test) development California',
        },
      ],
    };
  },
  methods: {
    onChange(val) {
      this.items = val;
    },
    onRemove(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.channel-manager {
}
</style>
