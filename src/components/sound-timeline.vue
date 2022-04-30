<template>
  <div class="timeline-layer" :style="soundStyle"></div>
</template>

<script>
export default {
  name: "sound-timeline",
  props: {
    layer: Object,
  },
  computed: {
    soundStyle() {
      return { "background-color": this.layer.color };
    },
  },
};
</script>
