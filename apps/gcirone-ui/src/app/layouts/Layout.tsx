import { PropsWithChildren } from 'hono/jsx';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <h2>layout</h2>
      <main>{children}</main>
      <p>x</p>
    </div>
  );
}
