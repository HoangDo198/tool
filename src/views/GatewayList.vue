<template>
  <div id="GatewayList" class="pt-5">
    <v-subheader class="font-weight-light display-1">Sale</v-subheader>

    <v-list-item v-for="item in items" :key="`${item.method}-${item.path}`">
      <!-- <v-list-item-avatar>
        <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
      </v-list-item-avatar>-->
      <v-list-item-icon>
        <v-btn depressed small color="error">{{item.method}}</v-btn>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-if="item.method" v-text="item.path"></v-list-item-title>
        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="dark lighten-1">mdi-border-color</v-icon>
        </v-btn>
      </v-list-item-action>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="dark lighten-1">mdi-delete</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name:"Sale",
        method: "POST",
        path: "/Sale"
      },
      {
        name: 'Sale',
        method: "GET",
        path: "/Sale"
      },
      {
        name: 'Sale',
        method: "GET",
        path: "/Sale/:SaleId"
      },
      {
        name: 'Sale',
        method: "PUT",
        path: "/Sale/:SaleId"
      },
      {
        name: 'Sale',
        method: "DELETE",
        path: "/Sale/:SaleId"
      }
    ],
    color: String
  }),
};
</script>
<style scoped>
button.v-btn.v-btn--depressed.theme--light.v-size--small.error {
  min-width: 0 !important;
  width: 80px !important;
}
</style>