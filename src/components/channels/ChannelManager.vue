<template>
  <div
    class="channel-manager max-w-xl p-4 border border-gray-350 rounded-xl w-full shadow"
  >
    <SearchField placeholder="hello" />
    <TgButton v-show="false" primary>button</TgButton>
  </div>
</template>

<script>
import TgButton from '@/components/forms/TgButton';
import SearchField from '@/components/forms/SearchField';
export default {
  name: 'ChannelManager',
  components: { SearchField, TgButton },
};
</script>

<style scoped>
.channel-manager {
}
</style>
