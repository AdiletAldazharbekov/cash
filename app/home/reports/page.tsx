import { Metadata } from 'next';
import Title from '../ui/Title';
import ContentPageTempl from '../ui/ContentPageTempl';

export const metadata: Metadata = {
  title: 'Report',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <ContentPageTempl />
    </div>
  );
}
