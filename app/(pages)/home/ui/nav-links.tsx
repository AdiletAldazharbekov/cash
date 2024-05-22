'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { useContext } from 'react';
import { TitleContext } from '@/app/context/TitleContext.js';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
export const links = [
  { name: 'Главная', href: '/home', icon: HomeIcon },
  { name: 'Dashboard', href: '/home/dashboard', icon: HomeIcon },
  { name: 'Клиенты', href: '/home/customers', icon: UserGroupIcon },
  { name: 'Кредиты', href: '/home/invoices', icon: DocumentDuplicateIcon },
  { name: 'Филиалы', href: '/home/departments', icon: BuildingOffice2Icon },
  { name: 'Журнал операций', href: '/home/operations', icon: UserGroupIcon },
  { name: 'Отчеты', href: '/home/reports', icon: UserGroupIcon },
  // { name: 'Залоги', href: '/home/guatartees', icon: UserGroupIcon },
  // { name: 'Сотрудники', href: '/home/employees', icon: UserGroupIcon },
  // { name: 'Продукты', href: '/home/products', icon: UserGroupIcon },
  // { name: 'Таблицы БД', href: '/home/tables', icon: UserGroupIcon },
  // { name: 'Академия', href: '/home/academy', icon: UserGroupIcon },
  // { name: 'Настройки', href: '/home/settings', icon: UserGroupIcon },
];

export default function NavLinks() {
  const { setTitle } = useContext(TitleContext);

  const pathname = usePathname();

  function handleClick(title: string) {
    setTitle(title);
  }

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={`${link.href}`}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-3 rounded-md bg-sky-990 p-3 text-sm font-medium hover:bg-sky-980 md:flex-none md:justify-start md:p-2 md:px-3',
              { 'md:bg-sky-550 md:hover:bg-sky-550': pathname === link.href },
            )}
            onClick={() => handleClick(link.name)}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
