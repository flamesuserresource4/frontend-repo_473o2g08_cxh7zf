import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Flames" className="w-8 h-8" />
            <span className="font-bold tracking-tight">Flames Blue</span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-500 text-white' : 'text-blue-200 hover:bg-white/10'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/cgpa"
              className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-500 text-white' : 'text-blue-200 hover:bg-white/10'}`}
            >
              CGPA Calculator
            </NavLink>
            <NavLink
              to="/installments"
              className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-500 text-white' : 'text-blue-200 hover:bg-white/10'}`}
            >
              Installment Calculator
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-blue-200/70">
        Built with ❤️ by Flames Blue
      </footer>
    </div>
  )
}

export default Layout
