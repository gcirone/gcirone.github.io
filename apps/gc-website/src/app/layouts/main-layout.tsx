import { Outlet } from 'react-router';
import Nav from '~/widgets/nav/nav';
import Footer from '~/widgets/footer/footer';

export default function MainLayout() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-6 py-26">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
