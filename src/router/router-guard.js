import store from '../store';

export default {
  requireUser(to, from, next) {
    const logged = store.getters.logged;
    next(logged ? true : {
      path: 'login',
      query: {
        redirect: to.fullPath,
      },
    });
  },
  requireAnonymous(to, from, next) {
    const logged = store.getters.logged;
    next(!logged ? true : {
      path: '/',
      query: {
        redirect: to.fullPath,
      },
    });
  },
};
