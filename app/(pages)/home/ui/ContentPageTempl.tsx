'use client';
import { TitleContext } from '@/app/context/TitleContext';
import React, { useContext } from 'react';

export default function Page() {
  const { title } = useContext(TitleContext);

  const lines = Array.from(
    { length: 10 },
    (_, i) => `Это строка номер ${i + 1} - страницы ${title}`,
  );

  return (
    <>
      <div className="flex h-14 items-center justify-between bg-gray-100">
        <h1 className="text-2xl font-semibold text-sky-1000">{title}</h1>
      </div>
      <div className="flex h-12 items-center justify-between  gap-2 bg-gray-200">
        Header {title}
      </div>
      <div className="pt-4 flex grow flex-col gap-2 bg-gray-300 md:h-full">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </>
  );
}

// "overflow-auto" style={{ maxHeight: '80vh' }}
