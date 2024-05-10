'use client';

import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="relative mx-auto flex w-full max-w-[400px] flex-col gap-4">
      <p className="text-center text-2xl font-semibold text-blue-400">
        Добро пожаловать!
      </p>
      <form action={dispatch}>
        <div className="flex-1 rounded-lg p-8 bg-white">
          <div className=" flex w-full flex-col gap-4">
            {/* Поле Логин */}
            <div>
              <label
                className="mb-1 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Логин
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Введите логин"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>

            {/* Поле Пароль */}
            <div>
              <label
                className="mb-1 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Пароль
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>

            {/* Кнопка Войти*/}
            <div>
              {errorMessage ? (
                <label className="mb-1 block text-center text-xs font-medium text-red-500">
                  {errorMessage}
                </label>
              ) : (
                <label className="mb-1 block text-center text-xs font-medium text-white">
                  Место для текста с ошибкой
                </label>
              )}
              <LoginButton />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" aria-disabled={pending}>
      Войти <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
