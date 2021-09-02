import bcrypt from 'bcrypt';
import client from '../../client';
import jwt from 'jsonwebtoken';
export default {
  Mutation: {
    editProfile: async (
      _,
      {firstName, lastName, username, email, password},
      {loginedUser},
    ) => {
      const {id} = jwt.verify(token, process.env.SECRET_KEY);
      let ugly = null;
      if (password) {
        ugly = await bcrypt.hash(password, 10);
      }
      const ok = await client.user.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          username,
          email,
          ...(ugly && {password: ugly}),
        },
      });
      if (ok.id) return {ok: true};
      else return {ok: false, error: 'Could not update profile.'};
    },
  },
};
