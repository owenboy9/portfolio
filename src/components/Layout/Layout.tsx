// src/components/Layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-48 p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
