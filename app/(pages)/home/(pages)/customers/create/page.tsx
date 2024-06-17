import Breadcrumbs from '@/app/(pages)/home/ui/breadcrumbs';
import Form from './ui/create-form';

export default async function Page() {
  return (
    <>
      <div className="flex h-14 items-center justify-between">
        <h1 className="text-2xl font-semibold text-sky-1000">
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Клиенты', href: '/home/customers' },
              {
                label: 'Добавить нового клиента',
                href: '/home/customers/create',
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
        <Form />
      </div>
    </>
  );
}
