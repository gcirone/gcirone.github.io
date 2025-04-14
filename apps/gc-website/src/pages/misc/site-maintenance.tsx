import { Link } from 'react-router';

export function SiteMaintenancePage() {
  return (
    <div>
      <h1 className="text-xl font-bold">Maintenance</h1>

      <p>Maintenance page</p>

      <Link to="/">About</Link>
    </div>
  );
}
