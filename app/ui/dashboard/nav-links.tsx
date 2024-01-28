'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
export const links = [
  { name: 'Главная', href: '/', icon: HomeIcon },
  { name: 'Клиенты', href: '/customers', icon: UserGroupIcon },

  {
    name: 'Кредиты',
    href: '/invoices',
    icon: DocumentDuplicateIcon,
  },
  // { name: 'Залоги', href: '/guatartees', icon: UserGroupIcon },
  // { name: 'Журнал операций', href: '/operations', icon: UserGroupIcon },
  // { name: 'Отчеты', href: '/reports', icon: UserGroupIcon },
  { name: 'Филиалы', href: '/departments', icon: UserGroupIcon },
  // { name: 'Сотрудники', href: '/employees', icon: UserGroupIcon },
  // { name: 'Продукты', href: '/products', icon: UserGroupIcon },
  // { name: 'Таблицы БД', href: '/tables', icon: UserGroupIcon },
  // { name: 'Академия', href: '/academy', icon: UserGroupIcon },
  // { name: 'Настройки', href: '/settings', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={`/dashboard${link.href}`}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              { 'bg-sky-100 text-blue-600': pathname === link.href },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
