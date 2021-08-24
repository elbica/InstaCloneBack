import dotenv from 'dotenv/types';
import {ApolloServer} from 'apollo-server';
dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT;

server.listen(PORT).then(() => {
  console.log(`running on http://localhost:${PORT}/`);
});
