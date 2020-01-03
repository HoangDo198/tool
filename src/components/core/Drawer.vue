<template>
  <v-navigation-drawer
    id="app-drawer"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    permanent
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title" @click="returnHome()">GateWay</v-list-item-title>
        <v-list-item-subtitle>fast and furious</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="subItem in item.items" :key="subItem.title" :to="subItem.to">
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: "mdi-routes",
          title: "ROUTERS",
          items: [
            { title: "List Router", to: "/GateWay" },
            { title: "Add New Router" }
          ]
        }
      ]
    };
  },
  methods: {
    returnHome() {
      this.$router.push({
        name: "Dashboard"
      })
    }
  }
};
</script>

<style scoped>
.v-list-item__title {
  cursor: pointer;
}
</style>