import Home from './routes/Home';
import Blog from './routes/Blog';
import Layout from './layouts/Layout';

export const routes = [
  {
    path: '/',
    children: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/blog',
    children: (
      <Layout>
        <Blog />
      </Layout>
    )
  },
  {
    path: '/blog/*',
    children: (
      <Layout>
        <div>blog bello</div>
      </Layout>
    )
  },

  {
    path: '/landing/*',
    children: <div>landing page</div>
  }
];
