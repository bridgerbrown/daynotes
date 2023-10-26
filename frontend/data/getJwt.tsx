import jwt, { JwtPayload } from 'jsonwebtoken';
import { useAuth } from './context/AuthContext';

export default function getJwt(ctx: any) {
  const jwtCookie = ctx.req.headers.cookie!;
  const token = jwtCookie.split('accessToken=')[1];
  if (!jwtCookie) {
    console.log("No jwtCookie found")
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  };
  let accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET as string;
  const decoded = jwt.verify(token, accessTokenSecret) as JwtPayload;
  const userResponse = {
    userEmail: decoded.email,
    userId: decoded.userId,
  }
  return userResponse;
};
