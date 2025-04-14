import { SiteMaintenancePage } from '~/pages/misc/site-maintenance';
import { ErrorBoundaryPage } from '~/pages/misc/error-boundary';
import { defaultMetadata } from '~/shared/config/metadata';
import { defaultLinks } from '~/shared/config/links';
import { middleware } from '~/app/middleware';
import type { Route } from './+types/root';
import RootLayout from '~/app/layouts/root-layout';
import { Outlet } from 'react-router';

import './styles.css';

export const unstable_middleware = middleware;

export const shouldRevalidate = () => false;

export async function loader({ request }: Route.LoaderArgs) {
  return { maintenance: import.meta.env.APP_MAINTENANCE_PAGE === 'true' };
}

export const meta: Route.MetaFunction = () => defaultMetadata;
export const links: Route.LinksFunction = () => defaultLinks;

export const Layout = RootLayout;

export default function Root({ loaderData }: Route.ComponentProps) {
  if (loaderData.maintenance) {
    return <SiteMaintenancePage />;
  }

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return <ErrorBoundaryPage error={error} />;
}
