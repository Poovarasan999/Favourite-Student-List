import { Link, NavLink, Route, Routes } from 'react-router-dom'
import AppLogo from './components/AppLogo.jsx'
import HomePage from './pages/HomePage.jsx'
import StudentListPage from './pages/StudentListPage.jsx'
import FavouriteStudentsPage from './pages/FavouriteStudentsPage.jsx'

const APP_ROUTES = [
  { path: '/', element: <HomePage /> },
  { path: '/students', element: <StudentListPage /> },
  { path: '/favourites', element: <FavouriteStudentsPage /> },
]

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/students', label: 'Student List' },
  { to: '/favourites', label: 'Favourite Students' },
]

const navLinkClass = ({ isActive }) =>
  [
    'relative px-1 py-3 text-sm font-medium transition-colors',
    isActive
      ? 'text-[#1a73e8] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-[#1a73e8]'
      : 'text-[#5f6368] hover:text-[#202124]',
  ].join(' ')

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa] text-[#202124]">
      <header className="sticky top-0 z-20 border-b border-[#dadce0] bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg outline-offset-2 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a73e8]"
          >
            <AppLogo />
            <div>
              <h1 className="text-xl font-normal tracking-tight text-[#202124] sm:text-[22px]">
                Favourite Student List
              </h1>
              <p className="hidden text-xs text-[#5f6368] sm:block">
                Quantum Physics students roster and favourites in one superposed list
              </p>
            </div>
          </Link>
          <nav className="flex flex-wrap gap-4 border-t border-transparent pt-0 sm:gap-6 sm:border-0">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <footer className="mt-auto border-t border-[#dadce0] bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="text-center">
            <p className="text-xs font-medium text-[#202124]">
              Quantum Physics Student Notes
            </p>
            <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-[#5f6368]">
              Each student behaves like a state in this demo: when you mark one
              as favourite, it appears instantly across routes through shared
              React context.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-[#5f6368]">
              The favourite list is also saved locally, so your selected
              students remain even after a normal browser refresh.
            </p>
          </div>

          <p className="mt-5 border-t border-[#e8eaed] pt-4 text-center text-xs font-medium text-[#5f6368]">
            Welcome to Quantum World of Students
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
