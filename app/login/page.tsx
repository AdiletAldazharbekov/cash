import AcmeLogo from '@/app/ui/logo';
import LoginForm from '@/app/ui/login-form';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center">
      <LoginForm />
      <p>
        <a href="/" className="text-blue-500">
          Главная страница
        </a>
      </p>
    </main>
  );
}
