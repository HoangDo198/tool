<template>
  <v-toolbar id="core-toolbar" flat prominent style="background: #eee; height:80px!important">
    <div class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text font-weight-regular display-2"
        style="line-height:80px!important;"
      >{{ getRouterName }}</v-toolbar-title>
    </div>
    <v-spacer />
    <div class="v-toolbar-title" style="margin-right:10px">
      <v-toolbar-title
        class="tertiary--text font-weight-light"
        style="line-height:80px!important;"
      >{{ author }}</v-toolbar-title>
    </div>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn style="margin-top:10px !important" color="error" dark v-on="on" fab>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          style="cursor:pointer;"
          @click.prevent="logout"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "ToolBar",
  data: () => ({
    title: null,
    author: "",
    items: [{ title: "Logout" }]
  }),
  created() {
    // this.author = localStorage.getItem("user_info");
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    getRouterName(){
        return this.$route.name;
    }
  },
  methods: {
    logout: function() {
        this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  watch: {
    $route(val) {
      this.title = val.name;
    }
  }
};
</script>