import { Outlet } from 'react-router';
import Header from '~/widgets/header/header';
import Footer from '~/widgets/footer/footer';

export default function MainLayout() {
  return (
    <div className="min-h-dvh antialiased">
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
