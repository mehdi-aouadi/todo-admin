import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/Layout';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import ProgramEdit from '@/components/ProgramEdit';
import modules from './modules';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: modules,
    },
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/program-edit',
      name: 'program-edit',
      component: ProgramEdit,
    },
  ],
});
