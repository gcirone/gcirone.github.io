import { index, layout, prefix, route, type RouteConfig } from '@react-router/dev/routes';
// import { flatRoutes } from '@react-router/fs-routes';

// export default flatRoutes() satisfies RouteConfig;

export default [
  layout('./layouts/main-layout.tsx', [
    index('./routes/home.tsx'),
    route('about', './routes/about.tsx'),
    route('contact', './routes/contact.tsx')
  ]),

  route('landing', './routes/landing.tsx'),

  ...prefix('api', [route('health-check', './routes/api/health-check.ts')])
] satisfies RouteConfig;
