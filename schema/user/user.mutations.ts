import client from '../client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
  Mutation: {
    createAccount: async (
      _,
      {firstName, lastName, username, email, password},
    ) => {
      const existUser = await client.user.findFirst({
        where: {
          OR: [{username}, {email}],
        },
      });
      if (existUser) throw new Error('This username/email already taken');

      const uglyPassword = await bcrypt.hash(password, 10);
      return client.user.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          password: uglyPassword,
        },
      });
    },
    login: async (_, {username, password}) => {
      const user = await client.user.findFirst({where: {username}});
      if (!user) {
        return {
          ok: false,
          error: 'User not found.',
        };
      }
      const passwordOk = await bcrypt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: 'Incorrect password',
        };
      }
      const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};
