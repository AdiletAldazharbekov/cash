import LoginForm from '@/app/_widgets/login-form';
import { Metadata } from 'next';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center">
      <LoginForm />
      <p>
        <a href="/" className="text-blue-500 flex items-center gap-3">
        <ArrowLeftIcon className="mr-auto h-5 w-5" /> Главная страница
        </a>
      </p>
    </main>
  );
}
