<template>
  <ul class="item-list">
    <item-preview
      class="item-preview"
      v-for="item in items"
      :item="item"
      :key="item._id"
      @muteChannel="muteChannel"
    />
  </ul>
  <ul class="sound-timeline">
    <sound-timeline v-for="item in items" :item="item" :key="item._id" />
  </ul>
</template>

<script>
import itemPreview from "./item-preview.vue";
import soundTimeline from "./sound-timeline.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    itemPreview,
    soundTimeline,
  },
  methods: {
    muteChannel(itemId) {
      this.$emit("muteChannel", itemId);
    },
  },
};
</script>
