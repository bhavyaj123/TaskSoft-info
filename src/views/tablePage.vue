<template>
  <div>
    <v-row no-gutters>
      <v-spacer />

      <v-text-field
        dense
        label="Search"
        v-model="search"
        style="max-width: 250px"
      >
      </v-text-field>
    </v-row>

    <v-data-table
      :search="search"
      :loading="loading"
      :fixed-header="fixHeader"
      dense
      :headers="headers"
      :items="get_Table"
      class="dtwidth elevation-2"
    >
    </v-data-table>
  </div>
</template>
<script>
const axios = require("axios").default;

export default {
  data: () => ({
    search: "",
    loading: false,
    headers: [
      { text: "API", value: "API" },
      { text: "Auth", value: "Auth" },
      { text: "Category", value: "Category" },
      { text: "Cors", value: "Cors" },
      { text: "Description", value: "Description" },
      { text: "HTTPS", value: "HTTPS" },
      //{ text: "Link", value: "Link" },
    ],
    get_Table: [],
    fixHeader: true,
  }),
  mounted() {
    this.get_table_method();
  },
  methods: {
    async get_table_method() {
      axios.get("https://api.publicapis.org/entries").then((res) => {
        this.loading = true;
        this.get_Table = res.data.entries;
        this.loading = false;
      });
      this.loading = false;
    },
  },
};
</script>

