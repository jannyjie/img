<template><fixSize /></template>

<script>
import fixSize from "@/components/fixSize.vue";
import { useMeta } from "vue-meta";
export default {
  name: "AboutView",
  components: {
    fixSize,
  },
  setup() {
    useMeta({
      title: "About",
    });
  },
};
</script>

<style></style>
