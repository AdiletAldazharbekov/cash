'use client';
import { TitleContext } from '@/app/context/TitleContext';
import React, { useContext } from 'react';

type Props = {};

const Title = () => {
  const { title } = useContext(TitleContext);
  return (
    <div className="flex h-14 items-center justify-between">
      <h1 className="text-2xl font-semibold text-sky-1000">{title}</h1>
    </div>
  );
};

export default Title;
