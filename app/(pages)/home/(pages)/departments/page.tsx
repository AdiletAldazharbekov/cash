import { Metadata } from 'next';
import ContentPageTempl from '../../ui/ContentPageTempl';

export const metadata: Metadata = {
  title: 'Deps',
};

export default function Page() {
  const userRole: string = 'admin';

  const renderContent = () => {
    switch (userRole) {
      case 'admin':
        return <ContentPageTempl />;
      case 'user':
        return 'User Page';
      default:
        return 'Default page';
    }
  };

  return <>{renderContent()}</>;
}