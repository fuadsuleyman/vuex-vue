<template>
  <button @click="increase({value:3})">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    // //   this.$store.dispatch('increase', { value: 10 });
    // this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    // })
    // },
    ...mapActions(['increase'])
  },
};
</script>