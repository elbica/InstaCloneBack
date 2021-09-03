import client from '../client';
import jwt from 'jsonwebtoken';

export const getUser = async (token: string | undefined) => {
  try {
    if (token) {
      const {id} = jwt.verify(token, process.env.SECRET_KEY as string);
      const user = await client.user.findUnique({where: {id}});
      return user ? user : null;
    }
    return null;
  } catch {
    return null;
  }
};

export const protectResolver = ourResolver => (root, args, context, info) => {
  if (!context.loginedUser) {
    return {
      ok: false,
      error: 'You need to login.',
    };
  }
  return ourResolver(root, args, context, info);
};
