import Link from 'next/link';
import NavLinks from './nav-links';
import Logo from '@/app/ui/logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col px-3 py-0 pb-4 md:px-1">
      <Link
        className="my-1 flex h-20 items-center justify-center rounded-md  bg-white/[0.05] md:h-32"
        href="/"
      >
        <div className="w-16 text-white md:w-32">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-inherit md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
              // cookies().delete('AUTH_TOKEN');
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-inherit p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Выйти</div>
          </button>
        </form>
      </div>
    </div>
  );
}
