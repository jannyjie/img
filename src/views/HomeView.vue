<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Stencil />
  </div>
</template>

<script>
// @ is an alias to /src
import Stencil from "@/components/Stencil.vue";
import { useMeta } from "vue-meta";
export default {
  name: "HomeView",
  components: {
    Stencil,
  },
  setup() {
    // Remove this if you want to use Bla from App.vue instead
    useMeta({
      title: "HomeView",
    });
  },
};
</script>
