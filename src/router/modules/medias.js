import MediasDashboard from '@/components/MediasDashboard';
import MediaEdit from '@/components/MediaEdit';
import MediaList from '@/components/MediaList';

export default {
  path: 'medias-dashboard',
  component: MediasDashboard,
  redirect: { name: 'medias' },
  meta: {
    breadcrumb: 'medias dashboard',
    breadcrumbNoLink: true,
  },
  children: [
    {
      path: 'medias/',
      component: MediasDashboard,
      meta: {
        breadcrumb: 'medias',
      },
      children: [
        {
          path: '',
          name: 'medias',
          component: MediaList,
        },
        {
          path: 'new/',
          name: 'add a new media',
          component: MediaEdit,
          props: {
            mode: 'creation',
          },
          meta: {
            breadcrumb: 'add a new media',
          },
        },
        {
          path: 'edit/:id',
          name: 'editing media',
          component: MediaEdit,
          props: {
            mode: 'edit',
          },
          meta: {
            breadcrumb: 'editing media',
          },
        },
      ],
    },
  ],
};
