export default [
  {
    method: 'GET',
    url: '/programs',
    response: [
      {
        status: false,
        link: 'programs/fd22c28c-f938-4004-be94-c7ebd713c359',
        name: 'Mock first program',
      },
      {
        status: false,
        link: 'programs/fd22c28c-f938-4004-be94-c7ebd713c359',
        name: 'Mock secon program',
      },
    ],
  },
  {
    method: 'GET',
    url: '/programs{/id}',
    response: {
      status: false,
      link: 'programs/fd22c28c-f938-4004-be94-c7ebd713c359',
      name: 'Mock first program',
    },
  },
];
