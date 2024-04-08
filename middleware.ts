import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

//Логика Middleware
//Напишите логику для проверки аутентификации пользователя.
//Проверьте роли или разрешения пользователя для авторизации маршрута.

//Логика Middleware

// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('currentUser')?.value;

//   if (currentUser && !request.nextUrl.pathname.startsWith('/home')) {
//     return Response.redirect(new URL('/dashboard', request.url));
//   }

//Этот пример использует Response.redirect для обработки перенаправлений на ранних этапах конвейера запросов,
//что делает его эффективным и централизованным для контроля доступа.

//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url));
//   }
// }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  //Используйте опцию matcher в вашем Middleware, чтобы указать маршруты, не требующие проверки авторизации
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
