'use client';
import { TitleContext } from '@/app/context/TitleContext';
import React, { useContext } from 'react';

type Props = {};

const Title = () => {
  const { title } = useContext(TitleContext);
  return (
    <div className="mt-6 mb-2 flex items-center justify-between bg-red-500">
      <h1 className="text-2xl font-semibold text-sky-1000">{title}</h1>
    </div>
  );
};

export default Title;
