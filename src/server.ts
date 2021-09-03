import dotenv from 'dotenv/types';
import {ApolloServer} from 'apollo-server';
dotenv.config();
import schema from 'src/schema/index';
import {getUser, protectResolver} from './schema/user/user.utils';
const server = new ApolloServer({
  schema,
  context: async ({req}) => ({
    loginedUser: await getUser(req.headers.authorization),
    protectResolver,
  }),
});

const PORT = process.env.PORT;

server.listen(PORT).then(() => {
  console.log(`running on http://localhost:${PORT}/`);
});
