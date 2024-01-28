import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | AFinA',
    default: 'AFinA',
  },
  description: 'Демо версия приложения для учета кредитов в Ломбардах',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
