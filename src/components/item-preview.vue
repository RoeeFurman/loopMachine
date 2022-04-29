<template>
  <section class="item-preview">
    <li class="sound-layer" :style="{ 'background-color': item.color }">
      <label @click="openPreviewLine"> {{ item.name }}</label>
      <div class="mute-btn">
        <button @click="muteChannel(item._id)">
          <i :class="displayMuteBtn"></i>
        </button>
      </div>
    </li>
  </section>
</template>

<script>
export default {
  name: "item-preview",
  props: {
    item: Object,
  },
  emits: ["muteChannel"],
  data() {
    return {
      openPreviewMode: false,
      sound: new Audio(`./sound/${this.item.fileURL}`),
    };
  },
  mounted() {
    this.sound.addEventListener("timeupdate", this.updateProgress);
  },
  components: {},
  computed: {
    currentTimeTrack() {
      return this.sound.currentTime;
    },
    muteMode() {
      return this.item.isMuted;
    },
    displayMuteBtn() {
      return this.item.isMuted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
    },
    onCursorMovedTo() {
      return this.$store.getters.cursorMovedTo;
    },
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    isLooping() {
      return this.$store.getters.isLooping;
    },
    isStopped() {
      return this.$store.getters.isStopped;
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
    onCursorMovedTo: {
      handler() {
        this.sound.currentTime = this.onCursorMovedTo;
        this.sound.play();
      },
      immediate: true,
    },
    isPlaying: {
      handler() {
        this.toggleSound();
      },
      immediate: true,
    },
    isLooping: {
      handler() {
        this.sound.loop = this.isLooping;
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
        this.sound.muted = this.muteMode;
      },
      immediate: true,
    },
  },
  unmounted() {
    this.sound.removeEventListener("timeupdate", this.updateProgress);
  },
};
</script>
