<template>
  <section class="layer-preview">
    <li
      class="sound-layer"
      :style="{ 'background-color': layer.color }"
      @click="muteChannel(layer._id)"
    >
      <label @click="openPreviewLine"> {{ layer.name }}</label>
      <div class="mute-btn">
        <i :class="displayMuteBtn"></i>
      </div>
    </li>
  </section>
</template>

<script>
export default {
  name: "layer-preview",
  props: {
    layer: Object,
  },
  emits: ["muteChannel"],
  data() {
    return {
      openPreviewMode: false,
      sound: new Audio(`./sound/${this.layer.fileURL}`),
    };
  },
  mounted() {
    this.sound.addEventListener("timeupdate", this.updateProgress);
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    isLooping() {
      return this.$store.getters.isLooping;
    },
    isStopped() {
      return this.$store.getters.isStopped;
    },
    cursorProgress() {
      return this.$store.getters.cursorProgress;
    },
    muteMode() {
      return this.layer.isMuted;
    },
    displayMuteBtn() {
      return this.layer.isMuted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
    },
    cursorPosition() {
      return this.$store.getters.cursorMovedTo;
    },
  },
  methods: {
    updateProgress(e) {
      this.$store.commit({
        type: "setProgress",
        progress: e.srcElement.currentTime,
      });
    },
    stopSound() {
      this.sound.pause();
      this.sound.currentTime = 0;
    },
    toggleSound() {
      if (this.isPlaying) {
        this.sound.play();
      } else {
        this.sound.pause();
      }
    },
    muteChannel(id) {
      this.$emit("muteChannel", id);
    },
  },
  watch: {
    cursorPosition: {
      handler() {
        this.sound.currentTime = this.cursorPosition;
        if (this.isPlaying) this.sound.play();
      },
      immediate: true,
    },
    isPlaying: {
      handler() {
        this.toggleSound();
      },
      immediate: true,
    },
    cursorProgress: {
      handler() {
        if (
          this.isLooping &&
          this.isPlaying &&
          this.cursorProgress === this.sound.duration
        ) {
          this.sound.currentTime = 0;
          this.sound.play();
        }
      },
      immediate: true,
    },
    isStopped: {
      handler() {
        this.stopSound();
      },
      immediate: true,
    },
    muteMode: {
      handler() {
        this.sound.muted = this.layer.isMuted;
      },
      immediate: true,
    },
  },
  unmounted() {
    this.sound.removeEventListener("timeupdate", this.updateProgress);
  },
};
</script>
