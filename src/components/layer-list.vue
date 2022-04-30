<template>
  <ul class="layer-list">
    <layer-preview
      class="layer-preview"
      v-for="layer in layers"
      :layer="layer"
      :key="layer._id"
      @muteChannel="muteChannel"
    />
  </ul>
  <ul class="sound-timeline">
    <sound-timeline v-for="layer in layers" :layer="layer" :key="layer.name" />
  </ul>
</template>

<script>
import layerPreview from "./layer-preview.vue";
import soundTimeline from "./sound-timeline.vue";

export default {
  props: {
    layers: {
      type: Array,
      required: true,
    },
    emits: ["muteChannel"],
  },
  components: {
    layerPreview,
    soundTimeline,
  },
  methods: {
    muteChannel(layerId) {
      this.$emit("muteChannel", layerId);
    },
  },
};
</script>
