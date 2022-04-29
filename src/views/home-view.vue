<template>
  <section class="item-app">
    <item-list v-if="items" :items="items" @muteChannel="muteChannel" />
    <actions />
    <cursorContainer />
  </section>
</template>

<script>
import itemList from "../components/item-list.vue";
import actions from "../components/actions.vue";
import cursorContainer from "../components/cursor-container.vue";
export default {
  name: "home",
  components: {
    itemList,
    actions,
    cursorContainer,
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
