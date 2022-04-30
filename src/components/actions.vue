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
      if (
        this.$store.getters.cursorProgress ===
          this.$store.getters.soundDuration &&
        !this.isLooping
      ) {
        this.stopAll();
        return "fa-solid fa-play";
      }
      return this.isPlaying ? "fa-solid fa-pause" : "fa-solid fa-play";
    },
  },
  methods: {
    playAll() {
      if (this.isStopped) {
        this.$store.commit({
          type: "setStopPlaying",
        });
      }
      this.$store.commit({
        type: "setIsPlaying",
      });
    },
    stopAll() {
      if (this.isPlaying) {
        this.$store.commit({
          type: "setIsPlaying",
        });
      }
      this.$store.commit({
        type: "setStopPlaying",
      });
    },
    loopAll() {
      this.$store.commit({
        type: "setIsLooping",
      });
    },
  },
};
</script>
