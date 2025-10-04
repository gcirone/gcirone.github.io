import { PropsWithChildren } from 'hono/jsx';

export function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div data-layout="blog">
      {children}
    </div>
  );
}
