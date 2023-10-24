import Cookies from 'js-cookie';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default async function getJwt(ctx: any) {
  const jwtCookie = ctx.req.headers.cookie!;
  const accessToken = jwtCookie.split('accessToken=')[1];
  const refreshToken = jwtCookie.split('refreshToken=')[2];

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
  let refreshTokenSecret: string = process.env.REFRESH_TOKEN_SECRET as string;

  try { 
    const decoded = jwt.verify(accessToken, accessTokenSecret) as JwtPayload;
    const userResponse = {
      userEmail: decoded.email,
      userId: decoded.userId,
    };

    const now = Date.now() / 1000;
    if (decoded.exp !== undefined && decoded.exp - now < 300) {
      const refreshResponse = await refreshAccessToken(refreshToken);

      if (refreshResponse) {
        Cookies.set('accessToken', refreshResponse.accessToken, { expires: 1 / 24, path: '/' });
        return {
          userResponse: {
            ...userResponse,
            accessToken: refreshResponse.accessToken,
          },
        };
      } else {
        console.log("Token refresh failed");
        return {
          redirect: {
            destination: '/auth/login',
            permanent: false,
          },
        };
      }
    }
    return {
      userResponse,
    };
  } catch (err) {
    console.error("Error verifying access token:", err);
    return {
      error: 'Error verifying access token',
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
};

async function refreshAccessToken(refreshToken: string) {
  try {
    const accessToken = Cookies.get('accessToken');
    const response = await fetch(`/api/refresh?refreshToken=${refreshToken}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh access token. Status: ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
