<template>
  <div class="actions">
    <button @click="playAll">{{ displayPlayStop }}</button>
    <button @click="stopAll">STOP</button>
    <button @click="loopAll">LOOP</button>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    isStopped() {
      return this.$store.getters.isStopped;
    },
    displayPlayStop() {
      return this.isPlaying ? "PAUSE" : "PLAY";
    },
  },
  methods: {
    playAll() {
      if (this.isStopped) {
        this.$store.dispatch({
          type: "stopPlaying",
        });
      }
      this.$store.dispatch({
        type: "togglePlaying",
      });
    },
    stopAll() {
      // if (this.isPlaying) {
      //   this.$store.dispatch({
      //     type: "togglePlaying",
      //   });
      // }
      this.$store.dispatch({
        type: "stopPlaying",
      });
    },
    loopAll() {
      this.$store.dispatch({
        type: "toggleLoop",
      });
    },
  },
};
</script>
