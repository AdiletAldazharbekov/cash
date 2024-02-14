import Sidebar from './ui/sidebar';
import './ui/styles.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none bg-sky-1000 text-white md:w-64 md:rounded-ee-[2.5rem]">
        <Sidebar />
      </div>
      <div className="dark bg-sky-1000 md:p-0 md:pr-3">
        <div className="px-6 leading-[4rem]">Header</div>
        <div className="flex h-full flex-col rounded-t-2xl bg-white text-sky-1000 md:rounded-ee-[2.5rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
