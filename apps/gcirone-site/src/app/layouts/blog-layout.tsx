import { PropsWithChildren } from 'hono/jsx';

export function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="bg-linear-to-tl from-orange-500 to-orange-600">
        <div className="container mx-auto min-h-[300px] px-4 py-8"></div>
      </div>
      <div>{children}</div>
    </div>
  );
}
