// import { logger } from '@gc/shared/lib/logger';
import { Link, NavLink, NavLinkProps } from 'react-router';
import Logo from '../../shared/ui/logo';
import { useEffect } from 'react';

const navLinks: NavLinkProps[] = [
  { to: '/', children: 'Home' },
  { to: '/about', children: 'About' },
  { to: '/contact', children: 'Contact' },
  { to: '/landing', children: 'Landing' }
];

export default function Nav() {
  useEffect(() => {
    // logger.info({ path: location.pathname }, 'Navigation useEffect');
  }, []);

  return (
    <nav className="fixed z-50 w-full bg-orange-100 shadow-sm dark:bg-stone-800">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" title="Get in touch!" className="text-primary">
          <Logo width={32} />
        </Link>

        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link, index) => (
            <NavLink
              className="hover:text-primary font-medium uppercase transition"
              children={link.children}
              key={index}
              to={link.to}
            />
          ))}

          <button
            id="theme-toggle"
            className="hover:text-light cursor-pointer text-stone-400 focus:outline-none"
          >
            <i className="fas fa-moon !dark:hidden"></i>
            <i className="fas fa-sun !dark:block !hidden"></i>
          </button>
        </div>

        <div className="flex items-center md:hidden">
          <button id="mobile-menu-button" className="mr-4 focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <button id="mobile-theme-toggle" className="focus:outline-none">
            <i className="fas fa-moon dark:hidden"></i>
            <i className="fas fa-sun hidden dark:block"></i>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hidden bg-white px-4 py-2 shadow-lg md:hidden dark:bg-stone-700"
      >
        {navLinks.map((link, index) => (
          <NavLink
            className="hover:text-primary block py-2 uppercase transition"
            children={link.children}
            key={index}
            to={link.to}
          />
        ))}
      </div>
    </nav>
  );
}
