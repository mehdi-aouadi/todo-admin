import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';
import Login from '@/components/Login';
import modules from './modules';
import RouterGuard from './router-guard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      beforeEnter: RouterGuard.requireUser,
      children: modules,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
