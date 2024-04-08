import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

//Функция getUser, которая запрашивает пользователя из базы данных.
async function getUser(email: string): Promise<User | undefined> {
  // Don't pass values, read back cached values, also solves context and easier to make it lazy
  // Не передавайте значения, а читайте закэшированные значения обратно, это также решает проблему контекста и делает его ленивым

  // use a database API that supports safe templating of queries
  // используйте базу данных API, поддерживающий безопасное шаблонирование запросов

  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error(
      'Получение пользователя из базы завершилась с ошибкой:',
      error,
    );
    throw new Error('Получение пользователя из базы завершилась с ошибкой.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    //это массив, в котором должны быть перечислены различные варианты входа в систему,
    //такие как Google или GitHub или Credentials (учетные данные или по другому использование логина и пароля)
    //Хотя мы используем провайдер Credentials, обычно рекомендуется использовать альтернативные провайдеры, такие как OAuth или почтовые провайдеры.
    //См. документацию NextAuth.js для полного списка вариантов.
    Credentials({
      //Используем функцию authorize для обработки логики аутентификации.
      async authorize(credentials) {
        //используем zod для валидации электронной почты и пароля перед проверкой существования пользователя в базе данных
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          //После проверки учетных данных используем функцию getUser, которая запрашивает пользователя из базы данных.
          const user = await getUser(email);
          if (!user) return null;
          //Затем вызываем bcrypt.compare, чтобы проверить, совпадают ли пароли:
          const passwordsMatch = await bcrypt.compare(password, user.password);
          // Если пароль верный возвращаем пользователя
          if (passwordsMatch) return user;
        }
        //Если логин или пароль не совпадает возвращаем null
        console.log('Не верные учетные данные');
        return null;
      },
    }),
  ],
});
