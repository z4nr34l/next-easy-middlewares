import { createMiddleware, type MiddlewareConfig } from '@rescale/nemo';
import { NextResponse } from 'next/server';

const middlewares = {
  '/': async ({ request }) => {
    // Loop prevention
    if (request.nextUrl.pathname.startsWith('/demo')) {
      return NextResponse.next();
    }

    request.nextUrl.pathname = 'demo/' + request.nextUrl.pathname;

    const response = NextResponse.redirect(request.nextUrl);

    response.cookies.set({
      name: 'test',
      value: 'test',
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    return response;
  },
} satisfies MiddlewareConfig;

// Create middlewares helper
export const middleware = createMiddleware(middlewares);

export const config = {
  matcher: ['/((?!api/|_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};
