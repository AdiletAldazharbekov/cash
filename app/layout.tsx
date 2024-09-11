import '@/app/ui/global.css';

import { Metadata } from 'next';
import { TitleProvider } from './_app/TitleContext';
import { openSans } from './_app/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | AFinA',
    default: 'AFinA',
  },
  description: 'Приложение для учета различных операций',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <TitleProvider>{children}</TitleProvider>
      </body>
    </html>
  );
}
