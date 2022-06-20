<template>
  <base-container title="Vuex" v-if="getIsAuth">
    <the-counter-vue></the-counter-vue>
    <second-counter-vue></second-counter-vue>
    <button @click="increment">Add 2</button>
    <new-counter-vue></new-counter-vue>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounterVue from './components/TheCounter.vue';
import NewCounterVue from './components/NewCounter.vue';
import SecondCounterVue from './components/SecondCounter.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounterVue,
    NewCounterVue,
    SecondCounterVue,
    UserAuth,
  },
  computed:{
    ...mapGetters(['getIsAuth'])
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('numbers',['increment']),
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