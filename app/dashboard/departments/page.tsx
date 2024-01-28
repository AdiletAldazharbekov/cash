import { Metadata } from 'next';
// import { links } from '@/app/ui/dashboard/nav-links';
export const metadata: Metadata = {
  title: 'Deps',
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Филиалы</h1>
      </div>
    </div>
  );
}
