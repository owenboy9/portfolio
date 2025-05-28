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
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }: { isActive: boolean }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
