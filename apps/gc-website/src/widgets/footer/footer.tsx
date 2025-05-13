import Logo from '~/shared/ui/logo';

export default function Footer() {
  return (
    <footer className="text-light bg-orange-100 py-8 dark:bg-stone-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <div className="text-primary flex flex-row items-center justify-center gap-1 text-2xl font-bold md:justify-start">
              <Logo width={28} /> &nbsp;
            </div>
            <p className="mt-1 text-sm text-stone-500">
              &copy; <span>{new Date().getFullYear()}</span> All Rights Reserved
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#github" className="hover:text-light text-stone-400 transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="#linkedin" className="hover:text-light text-stone-400 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#twitter" className="hover:text-light text-stone-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="hover:text-light text-stone-400 transition">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
