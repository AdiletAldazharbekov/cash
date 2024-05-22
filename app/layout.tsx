import '@/app/ui/global.css';
import { montserrat } from '@/app/ui/fonts';

import { Metadata } from 'next';
import { TitleProvider } from './context/TitleContext';

export const metadata: Metadata = {
  title: {
    template: '%s | AFinA',
    default: 'AFinA',
  },
  description: 'Демо версия приложения для учета финансов',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <TitleProvider>{children}</TitleProvider>
      </body>
    </html>
  );
}
