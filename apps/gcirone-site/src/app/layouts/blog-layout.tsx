import { PropsWithChildren } from 'hono/jsx';

export function BlogLayout({ children }: PropsWithChildren) {
  return <div className="bg-orange-500">{children}</div>;
}
