import { isRouteErrorResponse, Link } from 'react-router';

export function ErrorBoundaryPage({ error }: { error: unknown }) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    const isNotfound = error.status === 404;
    message = isNotfound ? '404' : 'Error';
    details = isNotfound ? 'Page not found' : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex min-h-dvh flex-row items-center justify-center gap-2">
      <h1 className="text-primary text-lg font-medium">{message}</h1>
      <div>
        <Link to="/" title="Back to the homepage!">
          {details}
        </Link>
        {stack && (
          <pre className="absolute bottom-0 left-0 w-full overflow-auto bg-stone-700 p-4">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
