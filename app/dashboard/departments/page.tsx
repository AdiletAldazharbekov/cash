import { montserrat } from '@/app/ui/fonts';
import { Metadata } from 'next';
// import { links } from '@/app/ui/dashboard/nav-links';
export const metadata: Metadata = {
  title: 'Deps',
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={` text-2xl font-semibold text-blue-700`}>Филиалы</h1>
      </div>
    </div>
  );
}

// color: #0D2E4E;
// font-family: Montserrat;
// font-size: 24px;
// font-style: normal;
// font-weight: 600;
// line-height: normal;
