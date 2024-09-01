import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/_shared/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';

import Search from './ui/search';
import { CreateInvoice } from './ui/buttons';
import Table from './ui/table';
import Pagination from './ui/pagination';

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
    <>
      <div className="flex h-14 items-center justify-between">
        <h1 className="text-2xl font-semibold text-sky-1000">Invoices</h1>
      </div>
      <div className="flex h-12 items-center justify-between  gap-2">
        <Search placeholder="Поиск кредитов..." />
        <CreateInvoice />
      </div>
      <div className="flex max-h-[84%] grow flex-col gap-2 overflow-auto pt-4 md:h-full">
        <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-4 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </>
  );
}
