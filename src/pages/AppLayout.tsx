import { ModeToggle } from '@/components/shared/ModeToggle';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AppLayout = () => {
  return (
    <>
      <main className="main-container">
        <header className="w-full text-right mb-2">
          <ModeToggle />
        </header>
        <AnimatePresence mode={'wait'}>
          <Outlet />
        </AnimatePresence>
      </main>
    </>
  );
};

export default AppLayout;
