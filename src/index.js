import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
