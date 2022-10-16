<template>
  <v-overlay :value="overlay">
    <v-progress-circular indeterminate color="primary" size="100" :value="60"
      >Loading...</v-progress-circular
    >
  </v-overlay>
</template>

<script>
export default {
  props: {
    overlay: Boolean,
  },
};
</script>
