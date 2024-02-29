import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <main className="main-container">
      <header>theme toggle icon</header>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
