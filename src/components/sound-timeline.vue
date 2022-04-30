<template>
  <section class="sound-timeline">
    <div class="layer" :style="soundStyle"></div>
  </section>
</template>

<script>
export default {
  name: "sound-timeline",
  props: {
    layer: Object,
  },
  data() {
    return {};
  },
  mounted() {},
  components: {},
  computed: {
    soundStyle() {
      return { "background-color": this.layer.color };
    },
  },
  methods: {},
  watch: {},
  unmounted() {},
};
</script>
