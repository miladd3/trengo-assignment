<template>
  <div id="app" class="flex justify-center items-center h-screen">
    <ChannelManager />
  </div>
</template>

<script>
import ChannelManager from '@/components/channels/ChannelManager';

export default {
  name: 'App',
  components: { ChannelManager },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
</style>
