'use client';
import { TitleContext } from '@/app/context/TitleContext';
import { useContext } from 'react';

export default function Page() {
  const { title } = useContext(TitleContext);

  return (
    <div className="flex h-full w-full flex-col p-2">
      <div className="flex h-14 items-center justify-between bg-gray-100">
        <h1 className="text-2xl font-semibold text-sky-1000">{title}</h1>
      </div>
      <div className="flex h-12 items-center justify-between  gap-2 bg-gray-200">
        Header {title}
      </div>
      <div className="pt-4 flex grow flex-col gap-2 bg-gray-300 md:h-full">
        Hello
      </div>
    </div>
  );
}
