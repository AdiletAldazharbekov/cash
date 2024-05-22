import { Inter, Montserrat, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
