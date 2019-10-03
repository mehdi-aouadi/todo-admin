import ProgramsDashboard from '@/components/ProgramsDashboard';
import ProgramEdit from '@/components/ProgramEdit';
import ProgramList from '@/components/ProgramList';

export default {
  path: 'programs-dashboard',
  component: ProgramsDashboard,
  redirect: { name: 'programs' },
  meta: {
    breadcrumb: 'programs dashboard',
    breadcrumbNoLink: true,
  },
  children: [
    {
      path: 'programs/',
      component: ProgramsDashboard,
      meta: {
        breadcrumb: 'programs',
      },
      children: [
        {
          path: '',
          name: 'programs',
          component: ProgramList,
        },
        {
          path: 'new/',
          name: 'add a new program',
          component: ProgramEdit,
          props: {
            mode: 'creation',
          },
          meta: {
            breadcrumb: 'add a new program',
          },
        },
        {
          path: 'edit/:id',
          name: 'editing program',
          component: ProgramEdit,
          props: {
            mode: 'edit',
          },
          meta: {
            breadcrumb: 'editing program',
          },
        },
      ],
    },
  ],
};
