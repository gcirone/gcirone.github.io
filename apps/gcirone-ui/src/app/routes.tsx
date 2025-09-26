import MainLayout from './layouts/MainLayout';
import apiHealthCheck from './routes/api/health-check';
import Home from './routes/home';
import Blog from './routes/blog';

export const routes = [
  {
    path: '/',
    children: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  {
    path: '/blog/*',
    children: (
      <MainLayout>
        <Blog />
      </MainLayout>
    )
  },
  {
    path: '/landing/*',
    children: <div>landing page</div>
  },

  {
    path: '/api/health-check',
    children: apiHealthCheck
  }
];
