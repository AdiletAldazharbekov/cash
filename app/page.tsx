import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana, montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import LoginForm from './ui/login-form';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />

          <p
            className={`${montserrat.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Добро пожаловать</strong>
            <br />в систему{' '}
            <strong>
              <a
                href="https://cash-delta.vercel.app/"
                className="text-blue-500"
                target="_blank"
              >
                AFinA
              </a>
            </strong>
            <br />- система для Ломбардов
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Продолжить</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          /> */}

          <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
            {/* <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
              <div className="w-32 text-white md:w-36">
                <AcmeLogo />
              </div>
            </div> */}
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
