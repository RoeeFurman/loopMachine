<template>
  <section class="main-app">
    <layer-list v-if="layers" :layers="layers" @muteChannel="muteChannel" />
    <timeline-list v-if="layers" :layers="layers" />
    <actions />
    <cursorContainer />
    <show-time />
  </section>
</template>

<script>
import layerList from "../components/layer-list.vue";
import actions from "../components/actions.vue";
import showTime from "../components/show-time.vue";
import cursorContainer from "../components/cursor-container.vue";
import timelineList from "../components/timeline-list.vue";

export default {
  name: "home",
  components: {
    layerList,
    actions,
    cursorContainer,
    showTime,
    timelineList,
  },
  computed: {
    layers() {
      return this.$store.getters.getlayers;
    },
  },
  methods: {
    muteChannel(id) {
      this.$store.dispatch({
        type: "muteChannel",
        id,
      });
    },
  },
};
</script>
