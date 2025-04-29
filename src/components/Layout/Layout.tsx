// src/components/Layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <main className="ml-48 p-6 w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
