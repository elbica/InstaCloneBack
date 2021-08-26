import dotenv from 'dotenv/types';
import {ApolloServer} from 'apollo-server';
dotenv.config();
import schema from 'schema/index';

const server = new ApolloServer({
  schema,
});

const PORT = process.env.PORT;

server.listen(PORT).then(() => {
  console.log(`running on http://localhost:${PORT}/`);
});
