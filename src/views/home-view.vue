<template>
  <section class="item-app">
    <item-list v-if="items" :items="items" @muteChannel="muteChannel" />
    <actions />
    <cursorContainer />
    <show-time />
  </section>
</template>

<script>
import itemList from "../components/item-list.vue";
import actions from "../components/actions.vue";
import showTime from "../components/show-time.vue";
import cursorContainer from "../components/cursor-container.vue";
export default {
  name: "home",
  components: {
    itemList,
    actions,
    cursorContainer,
    showTime,
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
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
