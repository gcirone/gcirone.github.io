export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center bg-amber-50 py-6 dark:bg-stone-800">
      <small className="text-xs text-stone-900 dark:text-orange-50">
        Copyright &copy; <span>{new Date().getFullYear()}</span> Gianluca Cirone
      </small>
    </footer>
  );
}
