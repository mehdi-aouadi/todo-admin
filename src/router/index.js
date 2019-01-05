import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import ProgramEdit from '@/components/ProgramEdit';

Vue.use(Router);

export default new Router({
  routes: [
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
