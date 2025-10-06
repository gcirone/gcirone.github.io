import { JSX } from 'hono/jsx';
import { useRequestContext } from 'hono/jsx-renderer';

export default function NavLink(options: JSX.IntrinsicElements['a'] & { exact?: boolean }) {
  const { href, exact, children, className, ...props } = options;

  const { req } = useRequestContext();
  const { pathname } = new URL(req.url);


  console.log('d', pathname, href)

  const isActive = exact ? pathname === href : href && pathname.startsWith(href);
  const newClassName = isActive ? `${className} active` : className;

  return (
    <a href={href} className={newClassName} {...props}>
      {children}
    </a>
  );
}
