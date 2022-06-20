<template>
  <base-container title="Vuex">
    <the-counter-vue></the-counter-vue>
    <button @click="addOne">Add 1</button>
    <new-counter-vue></new-counter-vue>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounterVue from './components/TheCounter.vue';
import NewCounterVue from './components/NewCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounterVue,
    NewCounterVue
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>