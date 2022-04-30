<template>
  <section class="layers-list">
    <ul>
      <layer-preview
        class="layer-preview"
        v-for="layer in layers"
        :layer="layer"
        :key="layer._id"
        @muteChannel="muteChannel"
      />
    </ul>
  </section>
</template>

<script>
import layerPreview from "./layer-preview.vue";

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
  },
  methods: {
    muteChannel(layerId) {
      this.$emit("muteChannel", layerId);
    },
  },
};
</script>
