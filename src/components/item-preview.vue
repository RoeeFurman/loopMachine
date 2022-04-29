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
    <article v-if="openPreviewMode">
      <h3>{{ item.fileURL }}</h3>
    </article>
  </section>
</template>

<script>
export default {
  name: "item-preview",
  props: {
    item: Object,
  },
  data() {
    return {
      openPreviewMode: false,
      sound: new Audio(`./sound/${this.item.fileURL}`),
    };
  },
  mounted() {},
  components: {},
  computed: {
    muteMode() {
      return this.item.isMuted;
    },
    displayMuteBtn() {
      return this.item.isMuted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
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
    stopSound() {
      this.sound.pause();
      this.sound.currentTime = 0;
    },
    toggleSound() {
      if (this.isPlaying) this.sound.play();
      else {
        this.sound.pause();
      }
    },
    muteChannel(id) {
      this.$emit("muteChannel", id);
    },
  },
  watch: {
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
};
</script>
