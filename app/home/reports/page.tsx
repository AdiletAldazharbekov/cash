import { Metadata } from 'next';
import Title from '../ui/Title';

export const metadata: Metadata = {
  title: 'Report',
};

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title />
    </div>
  );
}
