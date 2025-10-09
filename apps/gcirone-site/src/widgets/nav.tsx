import NavLink from '../shared/ui/nav-link';
import { JSX } from 'hono/jsx';

import logo from '../assets/images/logo.svg';

const navLinks: JSX.IntrinsicElements['a'][] = [
  { href: '/', children: 'Home', exact: true },
  { href: '/about', children: 'About' },
  { href: '/blog', children: 'Blog' },
  { href: '/contact', children: 'Contact' },
  { href: '/landing', children: 'Landing' }
];

export default function Nav() {
  return (
    <nav className="fixed top-0 z-30 h-18 w-full bg-gray-200/80 py-4 dark:bg-gray-800">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <NavLink href="/" className="flex flex-row gap-3 leading-0">
          <img width={38} src={logo} alt="Logo" className="logo" />

          <div className="relative mt-[2px] leading-0">
            <div className="font-space text-xl">
              <span className="text-transparent bg-clip-text bg-linear-to-b from-orange-500 to-orange-500">GIANLUCA</span>&nbsp;
              <span className="text-transparent bg-clip-text bg-linear-to-b from-gray-300 to-gray-300">CIRONE</span>
            </div>
            <div className="mt-[-4px] ml-[2px] text-xs text-gray-100 tracking-wider">Technology Master</div>
          </div>
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
