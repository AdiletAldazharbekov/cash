import { Metadata } from 'next';
import Title from '../ui/Title';

export const metadata: Metadata = {
  title: 'Deps',
};

export default function Page() {
  // const session = await getSession()
  // const userRole = session?.user?.role // Assuming 'role' is part of the session object
  const userRole: string = 'admin';

  if (userRole === 'admin') {
    // Component for admin users
    return (
      <div className="flex w-full flex-col">
        <Title />
        Admin
      </div>
    );
  } else if (userRole === 'user') {
    // Component for regular users
    return (
      <div className="flex w-full flex-col">
        <Title />
        User
      </div>
    );
  } else {
    // Component shown for unauthorized access
    return (
      <div className="flex w-full flex-col">
        <Title />
        Default
      </div>
    );
  }
}
