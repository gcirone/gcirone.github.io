// import { logger } from '@gc/shared/lib/logger';
import { useEffect } from 'react';
import { NavLink, NavLinkProps } from 'react-router';

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
    <nav>
      <ul className="flex flex-row gap-4">
        {navLinks.map((link, index) => (
          <NavLink
            className="nav-link font-medium uppercase"
            children={link.children}
            key={index}
            to={link.to}
          />
        ))}
      </ul>
    </nav>
  );
}
