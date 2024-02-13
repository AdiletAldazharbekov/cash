import SideNav from '../ui/dashboard/sidenav';
import './ui/styles.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="sidebar bg-sky-1000 w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="dark bg-sky-1000 md:p-0 md:pr-3">
        <div className="content__header ">Header</div>
        <div className="content text-sky-1000">{children}</div>
      </div>
    </div>
  );
}
