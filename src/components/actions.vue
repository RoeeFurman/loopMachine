<template>
  <div class="actions">
    <button @click="playAll"><i :class="displayPlayStop"></i></button>
    <button @click="stopAll"><i class="fa-solid fa-stop"></i></button>
    <button @click="loopAll" :class="{ repeat: isLooping }">
      <i class="fa-solid fa-repeat"></i>
    </button>
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
    isLooping() {
      return this.$store.getters.isLooping;
    },
    displayPlayStop() {
      return this.isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
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
      if (this.isPlaying) {
        this.$store.dispatch({
          type: "togglePlaying",
        });
      }
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
