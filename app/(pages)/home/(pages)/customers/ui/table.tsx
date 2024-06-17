import Image from 'next/image';
import { DeleteCustomer, UpdateCustomer } from './buttons';
import { fetchFilteredCustomers } from '@/app/_entities/customer/api';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <div className=" flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-100 p-1 md:pt-0">
          <div className="md:hidden">
            {customers?.map((client) => (
              <div
                key={client.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={client.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${client.name}'s profile picture`}
                      />
                      <p>{client.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{client.email}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateCustomer id={client.id} />
                    <DeleteCustomer id={client.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className=" hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal ">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-4">
                  Фамилия Имя Отчество
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>

                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Изменить</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {customers?.map((client) => (
                <tr
                  key={client.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-4 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={client.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${client.name}'s profile picture`}
                      />
                      <p>{client.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {client.email}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCustomer id={client.id} />
                      <DeleteCustomer id={client.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
