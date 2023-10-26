import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      username: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '123',
          username: 'jhenni',
        };
      },
      users: () => {
        return [
          {
            id: '123',
            username: 'jhenni',
          },
          {
            id: '1234',
            username: 'jhenni2',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
