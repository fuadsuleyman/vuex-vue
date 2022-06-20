<template>
  <base-container title="Vuex">
    <the-counter-vue></the-counter-vue>
    <second-counter-vue></second-counter-vue>
    <button @click="increment">Add 2</button>
    <new-counter-vue></new-counter-vue>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounterVue from './components/TheCounter.vue';
import NewCounterVue from './components/NewCounter.vue';
import SecondCounterVue from './components/SecondCounter.vue';

import { mapActions } from 'vuex';
export default {
  components: {
    BaseContainer,
    TheCounterVue,
    NewCounterVue,
    SecondCounterVue
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions(['increment'])
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