import { Metadata } from 'next';
import Title from '../ui/Title';

export const metadata: Metadata = {
  title: 'Deps',
};

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <Title />
    </div>
  );
}
