<template>
  <div id="core">
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Hello"
  }),
};
</script>

<style>
#core {
  padding-bottom: 100px;
}
</style>