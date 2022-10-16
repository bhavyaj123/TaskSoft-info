<template>
  <v-app>
    <v-app-bar clipped-left app class="elevation-1" color="yellow" dense>
      <h4 class="ml-2" style="font-size: 18px; max-width: 150px">
        Softinfo Systems
      </h4>
      <v-spacer></v-spacer>
      <v-autocomplete
        label="Search"
        v-model="search"
        dense
        color="black"
        @input="get_card(search)"
        outlined
        :items="itemsCards"
        class="mt-6 mr-8"
        item-text="title"
        item-value="title"
        style="max-width: 250px"
      >
      </v-autocomplete>
      <strong>{{ Email }}</strong>
      <v-btn icon color="primary" to="/">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-divider />
    <v-navigation-drawer app clipped width="170px" v-model="drawer">
      <v-list dense nav>
        <v-list-item-group
          v-model="selectedItem"
          :active-class="
            $vuetify.theme.dark != true
              ? 'black white--text'
              : 'white black--text'
          "
        >
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-icon class="mx-0">
              <v-icon small v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="ma-2">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    overlay: false,
    CardHeight: 0,
    selectedItem: 0,

    Email: "bhavya@softinfo.com",

    items: [
      {
        title: "Table page",
        icon: "mdi-table",
        to: "tablePage",
      },
      {
        title: "Cards page",
        icon: "mdi-credit-card",
        to: "cardPage",
      },
      {
        title: "Settings page",
        icon: "mdi-wrench",
        to: "settingsPage",
      },
    ],
    search: "",
    itemsCards: [
      {
        id: 1,
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        title: "Pre-fab homes",
        elevation: 0,
        border: "border-radius:'0px'",
        zoom: "",
      },
      {
        id: 2,
        color: "#952679",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        title: "Favorite road trips",

        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },

      {
        id: 3,
        color: "#662456",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        title: "Best airlines",

        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },
    ],
  }),
  watch: {
    "$route.name"(val) {
      console.log(val);
      setTimeout(() => {
        this.search = "";
      }, 3000);
    },
  },
  methods: {
    get_card(search) {
      var search_obj = {};
      search_obj.search = search;
      this.$store.commit("set_card", search_obj);
      this.$forceUpdate();
      setTimeout(() => {
        this.get_selected();
      }, 1000);
    },
    get_selected() {
      if (this.$route.name != "cardPage") {
        this.$router.push("cardPage");
      }
    },
  },
};
</script>
