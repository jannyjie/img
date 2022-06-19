<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Stencil />
  </div>
</template>

<script>
// @ is an alias to /src
import Stencil from "@/components/Stencil.vue";

export default {
  name: "HomeView",
  components: {
    Stencil,
  },
};
</script>
