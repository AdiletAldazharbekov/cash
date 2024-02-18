import { Metadata } from 'next';
import Title from '../ui/Title';
// import { links } from '@/app/ui/dashboard/nav-links';
export const metadata: Metadata = {
  title: 'Clients',
};

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title />
    </div>
  );
}
