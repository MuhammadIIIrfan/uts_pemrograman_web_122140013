import { NavLink } from 'react-router-dom'

export default function Header() {
  const activeClass = 'text-blue-600 font-semibold'
  const normalClass = 'hover:text-blue-500'

  return (
    <header className="bg-white shadow mb-6">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold text-gray-800">Literasi Hukum</h1>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Beranda
          </NavLink>
          <NavLink
            to="/articles"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Artikel
          </NavLink>
          <NavLink
            to="/ask"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Tanya
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
