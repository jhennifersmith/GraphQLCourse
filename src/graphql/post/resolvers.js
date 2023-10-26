const post = () => {
  return {
    id: '1',
    title: 'titulo legal',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'titulo legal',
    },
    {
      id: '2',
      title: 'titulo chato',
    },
    {
      id: '3',
      title: 'titulo normal',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
