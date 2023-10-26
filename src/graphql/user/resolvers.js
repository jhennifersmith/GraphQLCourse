const user = () => {
  return {
    id: '1',
    username: 'smith',
  };
};

const users = () => {
  return [
    {
      id: '1',
      username: 'smith',
    },
    {
      id: '2',
      username: 'jhennifer',
    },
    {
      id: '3',
      username: 'gabriel',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
