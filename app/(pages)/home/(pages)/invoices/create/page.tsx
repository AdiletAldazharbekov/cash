import Form from '@/app/(pages)/home/(pages)/invoices/ui/create-form';
import Breadcrumbs from '@/app/(pages)/home/ui/breadcrumbs';
import { fetchCustomers } from '@/app/_entities/customer/api';

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <>
      <div className="flex h-14 items-center justify-between">
        <h1 className="text-2xl font-semibold text-sky-1000">
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Кредиты', href: '/home/invoices' },
              {
                label: 'Оформить новый кредит',
                href: '/home/invoices/create',
                active: true,
              },
            ]}
          />
        </h1>
      </div>
      <div className="flex h-12 items-center justify-between  gap-2">
        Что нибудь написать может
      </div>
      <div className="flex max-h-[84%] grow flex-col gap-2 overflow-auto pt-4 md:h-full">
        <Form customers={customers} />
      </div>
    </>
  );
}
