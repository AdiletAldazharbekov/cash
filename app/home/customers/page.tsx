import { Metadata } from 'next';
// import { links } from '@/app/ui/dashboard/nav-links';
export const metadata: Metadata = {
  title: 'Clients',
};

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-16 w-full items-center justify-between p-6 pb-2">
        <h1 className="text-2xl font-semibold text-sky-1000">Клиенты</h1>
      </div>
    </div>
  );
}