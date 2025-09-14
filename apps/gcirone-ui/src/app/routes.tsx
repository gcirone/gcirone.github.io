import Layout from './layouts/Layout';
import { lazy, Suspense } from 'react';
import apiHealthCheck from './routes/api/health-check';

const Home = lazy(() => import('./routes/home'));
const Blog = lazy(() => import('./routes/blog'));

export const routes = [
  {
    path: '/',
    children: (
      <Layout>
        <Suspense fallback={'loading home'}>
          <Home />
        </Suspense>
      </Layout>
    )
  },
  {
    path: '/blog/*',
    children: (
      <Layout>
        <Suspense fallback={'loading blog'}>
          <Blog />
        </Suspense>
      </Layout>
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
