<template>
  <section class="layer-app">
    <layer-list v-if="layers" :layers="layers" @muteChannel="muteChannel" />
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
export default {
  name: "home",
  components: {
    layerList,
    actions,
    cursorContainer,
    showTime,
  },
  computed: {
    layers() {
      return this.$store.getters.getlayers;
    },
  },
  methods: {
    muteChannel(id) {
      console.log(id, "home");
      this.$store.dispatch({
        type: "muteChannel",
        id,
      });
    },
  },
};
</script>
