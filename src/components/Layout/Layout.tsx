import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen">
      {/* Add your Header and Footer components here later */}
      <main>
        <Outlet /> {/* This is where the content of each page will show */}
      </main>
    </div>
  );
};

export default Layout;
