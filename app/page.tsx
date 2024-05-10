import AcmeLogo from '@/app/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana, montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import LoginForm from './ui/login-form';

export default function Page() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center gap-5">
      <p>
        <a href="/home" className="text-blue-500">
          Тестовая версия без Логин Пароля
        </a>
      </p>
      <p>
        <a href="/login" className="text-blue-500">
          Авторизации через localhost
        </a>
      </p>
      <p>
        <a
          href="https://cash-delta.vercel.app/"
          className="text-blue-500"
          target="_blank"
        >
          Открыть Прод версию в новой вкладке
        </a>
      </p>
    </main>
  );
}
