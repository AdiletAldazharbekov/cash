import Pagination from '@/app/(pages)/home/(pages)/invoices/ui/pagination';
import { InvoicesTableSkeleton } from '@/app/_shared/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

import { Metadata } from 'next';
import { CreateInvoice } from '../../home/(pages)/invoices/ui/buttons';
import Table from '../../home/(pages)/invoices/ui/table';
import Search from '../../home/(pages)/invoices/ui/search';

export const metadata: Metadata = {
  title: 'Loans',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-semibold text-blue-700">Кредиты-1</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Поиск кредитов..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
