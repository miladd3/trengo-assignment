<template>
  <div
    class="channel-manager max-w-xl p-4 border border-gray-350 rounded-xl w-full shadow"
  >
    <TgSearchField
      placeholder="Add channel"
      v-model="searchKey"
      @submit="createSubmit"
    />

    <div class="create mt-3" v-if="shouldCreate">
      <ListItem :icon="randomIcon" :label="searchKey" no-list />
    </div>

    <List
      class="mt-3"
      v-if="shouldShowList"
      :items="items"
      :show-items="searched"
      @change="onChange"
      @remove="onRemove"
    />

    <div class="actions flex flex-row-reverse pt-3 h-10">
      <TgButton primary class="ml-2">Apply</TgButton>
      <TgButton outlined>Cancel</TgButton>
    </div>
  </div>
</template>

<script>
import TgSearchField from '@/components/forms/TgSearchField';
import List from '@/components/channels/List';
import TgButton from '@/components/forms/TgButton';
import ListItem from '@/components/channels/ListItem';
import getRandomIcon from '@/lib/get-random-icon';

export default {
  name: 'ChannelManager',
  components: { ListItem, TgButton, List, TgSearchField },
  data() {
    return {
      searchKey: '',
      randomIcon: getRandomIcon(),
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
  computed: {
    searched() {
      if (!this.searchKey) return [];
      return this.items.filter((item) =>
        item.label.includes(this.searchKey.toLowerCase())
      );
    },
    shouldCreate() {
      return this.searchKey && this.searched.length < 1;
    },
    shouldShowList() {
      return !this.searchKey || (this.searchKey && this.searched.length);
    },
  },
  watch: {
    shouldCreate() {
      this.randomIcon = getRandomIcon();
    },
  },
  methods: {
    onChange(val) {
      this.items = val;
    },
    onRemove(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    createSubmit() {},
  },
};
</script>

<style scoped>
.channel-manager .actions {
  box-sizing: content-box;
}
</style>
