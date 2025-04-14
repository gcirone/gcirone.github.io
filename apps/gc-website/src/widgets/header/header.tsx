// import { logger } from '../shared/lib/logger';
import Logo from '../../shared/ui/logo';
import { Link } from 'react-router';
import Nav from '../nav/nav';

export default function Header() {
  // logger.info('Header component render');

  return (
    <header className="bg-primary sticky top-0 flex w-full flex-row items-center gap-6 p-4">
      <div className="text-primary rounded bg-orange-50 p-1">
        <Link to="/" title="Get in touch!">
          <Logo width={28} />
        </Link>
      </div>
      <div className="text-md flex-1">
        <Nav />
      </div>
      <div className="text-md">-</div>
    </header>
  );
}
