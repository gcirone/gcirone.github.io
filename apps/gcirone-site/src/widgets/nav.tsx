import NavLink from '../shared/ui/nav-link';
import { JSX } from 'hono/jsx';

const navLinks: JSX.IntrinsicElements['a'][] = [
  { href: '/', children: 'Home', exact: true },
  { href: '/about', children: 'About' },
  { href: '/blog', children: 'Blog' },
  { href: '/contact', children: 'Contact' },
  { href: '/landing', children: 'Landing' }
];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-30 h-16 w-full bg-gray-200/80 py-4 backdrop-blur-sm dark:bg-gray-800/80">
      <div className="container mx-auto flex items-center justify-between px-4">
        <NavLink href="/" className="text-3xl leading-0 text-orange-500">
          <i className="icon icon-logo"></i>
        </NavLink>

        <div className="font-space hidden space-x-8 uppercase md:flex">
          {navLinks.map((link, index) => (
            <NavLink
              className="nav-link text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white [&.active]:text-orange-500"
              key={index}
              {...link}
            />
          ))}
        </div>

        <div className="flex items-center md:hidden">
          <button id="mobile-menu-button" className="mr-4 focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <button id="mobile-theme-toggle" className="focus:outline-none">
            <i className="fas fa-moon dark:hidden">x</i>
            <i className="fas fa-sun hidden dark:block">x</i>
          </button>
        </div>
      </div>
    </nav>
  );
}
