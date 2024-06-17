'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { fetchCustomers } from './data';

export async function deleteCustomer(id: string) {
  // throw new Error('Failed to Delete Customer');

  try {
    await sql`DELETE FROM customers WHERE id = ${id}`;
    // DELETE FROM customers WHERE id = '048aaca1-3358-4f17-80fc-6fb6e89cc1c1'
    revalidatePath('/home/customers');

    return { message: 'Deleted customer.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete customer.' };
  }
}

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
});

const CreateCustomer = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    image_url?: string[];
  };
  message?: string | null;
};
export async function createCustomer(prevState: State, formData: FormData) {
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: formData.get('image_url'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Customer.',
    };
  }

  // Test it out:
  //   console.log(rawFormData);
  const { name, email, image_url } = validatedFields.data;
  // const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
    INSERT INTO customers (name, email, image_url)
    VALUES (${name}, ${email}, ${image_url})
    ON CONFLICT (id) DO NOTHING;
  `;
  } catch (error) {
    return { message: 'Database Error: Failed to Create Customer.' };
  }
  revalidatePath('/home/customers');
  redirect('/home/customers');
}
