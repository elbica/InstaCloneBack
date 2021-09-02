import client from '../client';
import jwt from 'jsonwebtoken';

export const getUser = async (token: string | undefined) => {
  try {
    if (token) {
      const {id} = jwt.verify(token as string, process.env.SECRET_KEY);
      const user = await client.user.findUnique({where: {id}});
      return user ? user : null;
    }
    return null;
  } catch {
    return null;
  }
};
