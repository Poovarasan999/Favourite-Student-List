import { Link } from 'react-router-dom'

const KEYWORD_GROUPS = [
  {
    title: 'React',
    items: [
      'functional components',
      'JSX',
      'useState',
      'useEffect',
      'useContext',
      'createContext',
      'useMemo',
      'Context Provider pattern',
      'StrictMode',
    ],
  },
  {
    title: 'React Router (react-router-dom)',
    items: [
      'BrowserRouter',
      'Routes',
      'Route',
      'Link',
      'NavLink',
    ],
  },
  {
    title: 'JavaScript in this app',
    items: [
      'map()',
      '.some()',
      '.filter()',
      'array of objects',
      'event handlers (onClick)',
      'localStorage',
      'fallback values (??)',
      'conditional rendering (ternary)',
    ],
  },
  {
    title: 'Tooling & styling',
    items: ['Vite', 'React 19', 'Tailwind CSS'],
  },
  {
    title: 'App features implemented',
    items: [
      'Duplicate prevention',
      'Add / Remove favourites',
      'Favourite persistence on refresh',
      'Dynamic student cards',
      'Responsive layout (mobile + desktop)',
      'Route-based navigation',
    ],
  },
]

function KeywordChip({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#dadce0] bg-[#f8f9fa] px-2.5 py-1 font-mono text-xs font-medium text-[#202124]">
      {children}
    </span>
  )
}

function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] sm:p-8">
        <h2 className="text-2xl font-normal text-[#202124]">
          Welcome to Quantum Students
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5f6368]">
          This is the{' '}
          <span className="font-medium text-[#202124]">
            Quantum Favourite Student List
          </span>{' '}
          demo: think of each student as a state you can observe and mark as a
          favourite. Below you can see the main{' '}
          <span className="font-medium text-[#202124]">keywords and APIs</span>{' '}
          used in the code. Start with the student roster first, then check
          your favourite list.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            to="/students"
            className="inline-flex items-center justify-center rounded-full bg-[#1a73e8] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#1557b0] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
          >
            Open Student List
          </Link>
          <Link
            to="/favourites"
            className="inline-flex items-center justify-center rounded-full border border-[#dadce0] bg-white px-6 py-3 text-center text-sm font-medium text-[#1a73e8] transition hover:bg-[#f8f9fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a73e8]"
          >
            Go to Favourite Students
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] sm:p-8">
        <h2 className="text-xl font-normal text-[#202124]">
          Keywords & technologies used
        </h2>
        <p className="mt-2 text-sm text-[#5f6368]">
          These are the main terms you will see in the source files (hooks,
          router, and project setup).
        </p>
        <p className="mt-1 text-xs text-[#80868b]">
          Extra additions in this project include persistence, duplicate checks,
          responsive card UI, and favourite-only detail rendering.
        </p>

        <div className="mt-6 space-y-6">
          {KEYWORD_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-[#202124]">{group.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((keyword) => (
                  <KeywordChip key={keyword}>{keyword}</KeywordChip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[#dadce0] bg-white p-6 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] sm:p-8">
        <h2 className="text-xl font-normal text-[#202124]">What the app does</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[#5f6368]">
          <li>
            Routes: <span className="font-mono text-xs text-[#202124]">/</span>{' '}
            (home),{' '}
            <span className="font-mono text-xs text-[#202124]">/students</span>,{' '}
            <span className="font-mono text-xs text-[#202124]">/favourites</span>{' '}
            — navigation without full page reload.
          </li>
          <li>
            Favourite students are stored with{' '}
            <span className="font-mono text-xs text-[#202124]">createContext</span>{' '}
            + <span className="font-mono text-xs text-[#202124]">useContext</span>{' '}
            so every page sees the same list.
          </li>
          <li>
            Add to favourite (no duplicate IDs), remove on the favourites page,
            empty message: “No favourite students added yet”.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage
