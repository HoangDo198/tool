<template>
  <div>
    <v-app>
      <v-content>
        <ToolBar></ToolBar>

        <Drawer></Drawer>

        <Views></Views>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Drawer from "../components/core/Drawer";
import Views from "../components/core/View";
import ToolBar from "../components/core/ToolBar";
export default {
  components: {
    ToolBar,
    Drawer,
    Views
  }
};
</script>