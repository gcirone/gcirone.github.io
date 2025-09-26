import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <nav className="fixed top-0 z-30 w-full bg-gray-800/80 py-4 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#" className="text-3xl text-orange-500 leading-0">
            <i className="icon icon-logo"></i>
          </a>
          <div className="hidden space-x-8 md:flex">
            <a href="/" className="nav-link text-gray-300 hover:text-white">
              Home
            </a>
            <a href="/about" className="nav-link text-gray-300 hover:text-white">
              About
            </a>
            <a href="/projects" className="nav-link text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="/blog" className="nav-link text-gray-300 hover:text-white">
              Blog
            </a>
            <a href="/skills" className="nav-link text-gray-300 hover:text-white">
              Skills
            </a>
            <a href="/contact" className="nav-link text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
          <button className="text-gray-300 md:hidden">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>

      <main className="min-h-screen">{children}</main>

      <footer className="border-t border-gray-800 bg-gray-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold text-orange-500">
                Gianluca Cirone
              </a>
              <p className="mt-2 text-gray-500">Technical Director</p>
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
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2023 Gianluca Cirone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
