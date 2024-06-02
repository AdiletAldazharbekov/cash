import { Metadata } from 'next';
import ContentPageTempl from '../../ui/ContentPageTempl';

export const metadata: Metadata = {
  title: 'Operations',
};

export default function Page() {
  return (
    <>
      <ContentPageTempl />
    </>
  );
}
