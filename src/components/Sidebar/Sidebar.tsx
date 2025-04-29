// src/components/Sidebar/Sidebar.tsx
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'code', path: '/code' },
  { name: 'cinema', path: '/cinema' },
  { name: 'literature', path: '/literature' },
  { name: 'contact', path: '/contact' },
];

const Sidebar = () => {
  return (
    <aside className="fixed top-[9rem] left-[2rem] w-48 h-screen p-12 bg-white/70 backdrop-blur-md z-50"
    >
      
      <nav className="flex flex-col gap-4 text-base font-bold font-mono">
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }: { isActive: boolean }) =>
          `px-2 py-1 rounded transition-transform transform
          ${isActive ? 'text-black font-semibold' : 'text-black'}
          hover:scale-106 hover:bg-black/5 no-underline text-shadow-hover`
        }
        style={{ color: 'black', textDecoration: 'none' }}
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
