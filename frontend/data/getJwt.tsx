import jwt, { JwtPayload } from 'jsonwebtoken';
import { useAuth } from './context/AuthContext';

export default function getJwt(ctx: any) {
  const { login } = useAuth();
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
  try {
    const decoded = jwt.verify(token, accessTokenSecret) as JwtPayload;
    const userResponse = {
      userEmail: decoded.email,
      userId: decoded.userId,
    }
    login();
    return userResponse;
  } catch (err) {
    console.log("Token is invalid or expired:", err);
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
};
