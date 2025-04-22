import { Route } from './+types/health-check';

export async function loader({ request }: Route.LoaderArgs) {
  return Response.json({ status: 'ok' });
}
