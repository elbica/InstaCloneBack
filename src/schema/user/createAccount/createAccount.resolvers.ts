import client from '../../client';
import bcrypt from 'bcrypt';

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
  },
};
