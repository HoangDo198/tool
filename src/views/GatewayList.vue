<template>
  <div id="GatewayList">
    <!-- <v-subheader class="font-weight-light display-1">Sale</v-subheader>
    <v-divider></v-divider>
    <v-subheader class="font-weight-light body-1">
      <strong>Path: /User</strong>
      <strong>Authentication: true</strong>
    </v-subheader>

    <v-list-item v-for="item in items" :key="`${item.method}-${item.path}`">
      <v-list-item-avatar>
        <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
      </v-list-item-avatar>
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
    </v-list-item>-->

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="`${item.name}-${item.path}`"
        :prepend-icon="item.action"
        no-action
        sub-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="title" v-text="item.name"></v-list-item-title>
            <v-divider></v-divider>
          </v-list-item-content>
        </template>

        <v-list-item-content>
          <v-subheader class="font-weight-light body-1">
            <strong>Path: {{item.path}}</strong>
            <strong>Authentication: {{item.authentication}}</strong>
          </v-subheader>
        </v-list-item-content>

        <v-list-item
          id="warp-item"
          v-for="subItem in item.endpoints"
          :key="subItem._id"
          :style="{backgroundColor: subItem.backgroundcolor, borderColor: subItem.bordercolor}"
        >
          <v-list-item-icon>
            <v-btn depressed small :color="subItem.bordercolor">{{subItem.method}}</v-btn>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="subItem.path"></v-list-item-title>
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
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Duc",
        path: "/hoanadssasas1aaadsad",
        authentication: false,
        endpoints: [
          {
            _id: "5e0ea6f1668fde3570ba1757",
            method: "POST",
            path: "/create",
            handler: "user.creat",
            routeId: "5e0ea4d25dd526343ccd62d3",
            __v: 0
          },
          {
            _id: "5e0ea6f5668fde3570ba1758",
            method: "GET",
            path: "/create",
            handler: "user.creat",
            routeId: "5e0ea4d25dd526343ccd62d3",
            __v: 0
          },
          {
            _id: "5e0ea6f5668fde3570ba1759",
            method: "DELETE",
            path: "/create",
            handler: "user.creat",
            routeId: "5e0ea4d25dd526343ccd62d3",
            __v: 0
          }
        ]
      },
      {
        name: "Hoang",
        path: "/test",
        authentication: false,
        endpoints: [
          {
            _id: "5e0ee2e4c85b37386669a886",
            method: "POST",
            path: "/test",
            handler: "user.add",
            routeId: "5e0ee0d8c85b37386669a885",
            __v: 0
          }
        ]
      }
    ]
  }),
  created() {
    for (let data of this.items) {
      for (let subdata of data.endpoints) {
        switch (subdata.method) {
          case "POST":
            subdata.backgroundcolor = "#e8f6f0";
            subdata.bordercolor = "#49cc90";
            break;
          case "GET":
            subdata.backgroundcolor = "#ebf3fb";
            subdata.bordercolor = "#61affe";
            break;
          case "DELETE":
            subdata.backgroundcolor = "#fae7e7";
            subdata.bordercolor = "#f93e3e";
            break;
          default:
            break;
        }
      }
    }
    console.log(this.items);
  }
};
</script>
<style scoped>
button.v-btn.v-btn--depressed.theme--light.v-size--small {
  min-width: 0 !important;
  width: 80px !important;
  color: floralwhite;
  font-weight: bold;
  font-size: 16px;
}
.v-list-item.theme--light {
  margin: 0 20px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
}
.v-application .font-weight-light {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px !important;
}
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > div
  > .v-list-item {
  padding-left: 16px;
}
</style>