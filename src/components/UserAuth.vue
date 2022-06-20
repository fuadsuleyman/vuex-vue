<template>
  <button v-if="!getIsAuth" @click="login">Login</button>
  <button v-if="getIsAuth" @click="logout">Log Out</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['getIsAuth']),
  },
};
</script>