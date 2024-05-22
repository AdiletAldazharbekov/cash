import { Metadata } from 'next';
import ContentPageTempl from '../../ui/ContentPageTempl';

export const metadata: Metadata = {
  title: 'Operations',
};

export default function Page() {
  return (
    <div className="flex h-full w-full flex-col p-2">
      <ContentPageTempl />
    </div>
  );
}
