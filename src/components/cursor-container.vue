<template>
  <div class="cursor-container">
    <div class="cursor-input">
      <input
        class="timeline"
        type="range"
        @input="onChangeCursor"
        v-model="currTime"
        min="0"
        :max="soundDuration"
        step="any"
      />
    </div>
  </div>
</template>
<script>
import layerPreview from "./layer-preview.vue";

export default {
  props: {},
  data() {
    return {
      currTime: 0,
    };
  },
  computed: {
    soundDuration() {
      return this.$store.getters.soundDuration;
    },
    cursorProgress() {
      return this.$store.getters.cursorProgress;
    },
  },
  components: {
    layerPreview,
  },
  methods: {
    onChangeCursor() {
      this.$store.commit({ type: "onCursorMove", currTime: this.currTime });
    },
  },
  watch: {
    cursorProgress: {
      handler() {
        this.currTime = this.cursorProgress;
      },
      immediate: true,
    },
  },
};
</script>
