<template>
  <section class="sound-timeline">
    <div class="layer" :style="soundStyle"></div>
  </section>
</template>

<script>
export default {
  name: "sound-timeline",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  mounted() {},
  components: {},
  computed: {
    soundStyle() {
      return { "background-color": this.item.color };
    },
  },
  methods: {},
  watch: {},
  unmounted() {},
};
</script>
