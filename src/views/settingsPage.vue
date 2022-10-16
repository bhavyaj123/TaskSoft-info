<template>
  <v-card>
    <v-card-title class="black--text"
      >Switch between light and dark themes</v-card-title
    >
    <v-switch class="ml-4" v-model="switch1" label="Switch"></v-switch>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    switch1: false,
  }),
  watch: {
    switch1() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>