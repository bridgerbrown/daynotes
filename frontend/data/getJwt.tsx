import jwt, { JwtPayload } from 'jsonwebtoken';

export default function getJwt(ctx: any) {
  const jwtCookie = ctx.req.headers.cookie!;
  const token = jwtCookie.split('jwt=')[1];
  if (!jwtCookie) {
    console.log("No jwtCookie found")
    return {
      redirect: {
        destination: '/login',
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