<template>
  <v-container fluid>
    <v-card-title
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h5 justify-center'
      "
      ><v-icon
        size="35"
        class="mr-2"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        >{{
          getGreetingData === "Good Evening"
            ? "mdi-moon-waning-crescent"
            : "mdi-white-balance-sunny"
        }}</v-icon
      >{{ getGreetingData }}, User!</v-card-title
    >

    <v-card-title class="mt-2 justify-center">{{ organisation }}</v-card-title>
    <v-row class="justify-center">
      <v-img
        :src="require(`../../organisations/${organisationDirectory}/logo.png`)"
        :max-height="'200'"
        :max-width="'200'"
      />
    </v-row>
    <div class="text-center mt-5 caption">
      {{ organisationEnvironment.toUpperCase() }}
    </div>
  </v-container>
</template>
<script>
export default {
  name: "dashboard-component",
  data: () => ({
    organisation: process.env.VUE_APP_ORGANISATION_NAME,
    organisationDirectory: process.env.VUE_APP_DIRECTORY,
    organisationEnvironment: process.env.NODE_ENV,
  }),
  computed: {
    getGreetingData() {
      var today = new Date();
      var curHr = today.getHours();

      return curHr < 12
        ? "Good Morning"
        : curHr > 18
        ? "Good Evening"
        : "Good Afternoon";
    },
  },
  methods: {},
};
</script>
