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

    <div class="actions pt-3">
      <div class="flex flex-row-reverse fade-in" v-if="updated">
        <TgButton primary class="ml-2" @click="apply"> Apply </TgButton>
        <TgButton outlined @click="cancel">Cancel</TgButton>
      </div>
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
      items: [],
      updated: false,
    };
  },
  computed: {
    storedItem() {
      return this.$store.state.items;
    },
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
  mounted() {
    this.populateItems();
  },
  watch: {
    shouldCreate() {
      this.randomIcon = getRandomIcon();
    },
    items() {
      if (JSON.stringify(this.items) !== JSON.stringify(this.storedItem)) {
        this.updated = true;
      }
    },
  },
  methods: {
    onChange(val) {
      this.items = val;
    },
    onRemove(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    populateItems() {
      this.items = this.storedItem.map((a) => ({ ...a }));
    },
    createSubmit(label) {
      const id = (this.items[this.items.length - 1]?.id || 0) + 1;

      const item = {
        label,
        id,
        icon: this.randomIcon,
      };

      this.searchKey = '';
      this.items.push(item);
    },
    apply() {
      this.$store.commit('setItems', this.items);
      this.updated = false;
      this.$toasted.success('Changes Saved');
    },
    cancel() {
      this.updated = false;
      this.populateItems();
    },
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s 1;
}
.channel-manager .actions {
  box-sizing: content-box;
}
</style>
