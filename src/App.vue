<template>
  <v-app>
    <v-main>
      <dashboard />
    </v-main>
  </v-app>
</template>

<script>
import dashboard from "./views/dashboard.vue";

export default {
  name: "App",
  components: {
    dashboard,
  },
  data: () => ({
    //
  }),
  mounted() {},
};
</script>
