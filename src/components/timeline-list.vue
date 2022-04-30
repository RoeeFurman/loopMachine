<template>
  <section class="timeline-list">
    <ul>
      <sound-timeline
        class="sound-timeline"
        v-for="layer in layers"
        :layer="layer"
        :key="layer.name"
      />
    </ul>
  </section>
</template>

<script>
import soundTimeline from "./sound-timeline.vue";

export default {
  name: "timeline-list",
  props: {
    layers: Object,
  },
  components: {
    soundTimeline,
  },
};
</script>
