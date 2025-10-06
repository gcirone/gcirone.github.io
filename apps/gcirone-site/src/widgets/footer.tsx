export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-bold text-orange-500">
              Gianluca Cirone
            </a>
            <p className="mt-2 text-md text-gray-500">Technical Director</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 transition hover:text-orange-500">
              <i data-feather="github" className="h-5 w-5"></i>
            </a>
            <a href="#" className="text-gray-400 transition hover:text-orange-500">
              <i data-feather="linkedin" className="h-5 w-5"></i>
            </a>
            <a href="#" className="text-gray-400 transition hover:text-orange-500">
              <i data-feather="twitter" className="h-5 w-5"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; <span>{new Date().getFullYear()}</span> Gianluca Cirone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
