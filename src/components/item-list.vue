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
</template>

<script>
import itemPreview from "./item-preview.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    itemPreview,
  },
  methods: {
    muteChannel(itemId) {
      this.$emit("muteChannel", itemId);
    },
  },
};
</script>
