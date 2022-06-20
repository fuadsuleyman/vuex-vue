export default {
    login(context) {
      console.log('Login Basildi');
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  };
  