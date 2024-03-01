import { ModeToggle } from '@/components/shared/ModeToggle';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <main className="main-container">
        <header className="w-full text-right mb-2">
          <ModeToggle />
        </header>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
