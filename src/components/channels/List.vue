<template>
  <div class="tg-list max-h-60 overflow-auto -mx-4 px-4">
    <draggable
      v-model="_items"
      handle=".handler"
      @start="drag = true"
      @end="drag = false"
    >
      <TransitionGroup type="transition" name="flip-list" v-bind="dragOptions">
        <ListItem
          v-for="item in _items"
          :key="item.id"
          :label="item.label"
          :icon="item.icon"
          :id="item.id"
          @remove="onRemove"
        />
      </TransitionGroup>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import ListItem from '@/components/channels/ListItem';
export default {
  name: 'List',
  components: { ListItem, draggable },
  props: {
    items: { type: Array, default: () => [] },
    showItems: { type: Array, default: null },
  },
  data() {
    return {
      drag: false,
    };
  },
  computed: {
    _items: {
      get() {
        if (this.showItems.length) return this.showItems;
        return this.items;
      },
      set(val) {
        this.$emit('change', val);
      },
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
  methods: {
    onRemove(id) {
      this.$emit('remove', id);
    },
  },
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
