import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back <span>home</span></Link>
    </div>
  );
}
