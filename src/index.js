import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
      id: ID
      name: String
      age: Int
      average: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello again';
      },
      hi: () => {
        return 'Hi';
      },
      id: () => '1asd-2-a',
      name: () => 'Jhennifer',
      age: () => 24,
      average: () => 30.2,
      married: () => false,
      arrayString: () => ['A', 'B'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
