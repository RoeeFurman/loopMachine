<template>
  <section class="show-time">
    <div>00:{{ cursorProgress }}</div>
  </section>
</template>
<script>
export default {
  computed: {
    cursorProgress() {
      return (Math.floor(this.$store.getters.cursorProgress) + "").padStart(
        2,
        0
      );
    },
  },
};
</script>
