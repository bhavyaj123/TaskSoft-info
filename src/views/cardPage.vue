<template>
  <v-card max-width="1000" class="elevation-0">
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
        <v-card
          :style="item.border"
          :elevation="item.elevation"
          :color="item.color"
          :class="item.zoom"
          class="ma-5"
          dark
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5" v-text="item.title"></v-card-title>
              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="delete_method(item)" text color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        color: "black",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        title: "Pre-fab homes",
        elevation: 0,
        border: "border-radius:'0px'",
        zoom: "",
      },
      {
        id: 2,
        color: "yellow",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        title: "Favorite road trips",

        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },

      {
        id: 3,
        color: "blue",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        title: "Best airlines",

        elevation: 0,
        zoom: "",
        border: "border-radius:'0px'",
      },
    ],
  }),
  watch: {
    "$store.getters.get_card.search"(val) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].title == val) {
          this.items[i].elevation = 10;
          this.items[i].border = "border-radius:'10px'";
          this.items[i].zoom = "zoom-efect";
          setTimeout(() => {
            this.items[i].elevation = 0;
            this.items[i].border = "border-radius:'0px'";
            this.items[i].zoom = "";
          }, 3000);
        }
      }
    },
  },
  mounted() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].title == this.$store.getters.get_card.search) {
        this.items[i].elevation = 10;
        this.items[i].border = "border-radius:'10px'";
        this.items[i].zoom = "zoom-efect";
        setTimeout(() => {
          this.items[i].elevation = 0;
          this.items[i].border = "border-radius:'0px'";
          this.items[i].zoom = "";
        }, 3000);
      }
    }
  },
  methods: {
    delete_method(item) {
      this.items = [...this.items].filter((val) => val.id != item.id);
    },
  },
};
</script>
<style>
.zoom-efect {
  transform: scale(1.1);
}
</style>