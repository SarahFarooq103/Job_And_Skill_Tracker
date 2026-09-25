function Footer() {
  return (
    <footer className="h-16 border-t border-slate-200 bg-white px-6">
      <div className="flex h-full items-center justify-between">

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} CareerElevate. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-xs font-medium text-slate-600">
          <a href="/about" className="transition hover:text-indigo-600">
            About
          </a>

          <a href="/privacy" className="transition hover:text-indigo-600">
            Privacy
          </a>

          <a href="/support" className="transition hover:text-indigo-600">
            Support
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;