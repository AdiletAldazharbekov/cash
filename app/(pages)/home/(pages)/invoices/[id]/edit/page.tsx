import Form from '@/app/(pages)/home/(pages)/invoices/ui/edit-form';
import Breadcrumbs from '@/app/(pages)/home/(pages)/invoices/ui/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Edit loan',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Кредиты', href: '/dashboard/invoices' },
          {
            label: 'Изменить кредит',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
