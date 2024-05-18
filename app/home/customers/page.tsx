import { Metadata } from 'next';
import ContentPageTempl from '../ui/ContentPageTempl';
// import { links } from '@/app/ui/dashboard/nav-links';
export const metadata: Metadata = {
  title: 'Clients',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <ContentPageTempl />
    </div>
  );
}
