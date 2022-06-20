import { createApp } from 'vue';

import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload){
        state.isLoggedIn = payload.isAuth
    }
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);

    },
    login(context){
        console.log("Login Basildi");
        context.commit('setAuth', {isAuth: true})
    },
    logout(context){
        context.commit('setAuth', {isAuth: false})
    }
  },
  getters: {
    getIsAuth(state) {
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
