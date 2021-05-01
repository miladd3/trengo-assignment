<template>
  <div class="channel-manager">
    <TgInput />
    <TgButton primary>button</TgButton>
  </div>
</template>

<script>
import TgButton from '@/components/forms/TgButton';
import TgInput from '@/components/forms/TgInput';
export default {
  name: 'ChannelManager',
  components: { TgInput, TgButton },
};
</script>

<style scoped></style>
