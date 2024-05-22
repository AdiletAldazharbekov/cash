import Form from '@/app/(pages)/home/(pages)/invoices/ui/create-form';
import Breadcrumbs from '@/app/(pages)/home/(pages)/invoices/ui/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Create invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Кредиты', href: '/dashboard/invoices' },
          {
            label: 'Оформить новый кредит',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
