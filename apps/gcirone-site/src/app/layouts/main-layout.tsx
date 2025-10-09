import { PropsWithChildren } from 'hono/jsx';
import Footer from '../../widgets/footer';
import Nav from '../../widgets/nav';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav />
      <main className="mt-17 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
