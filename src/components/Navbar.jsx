import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/measurements', label: 'Measurements' },
]

function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl text-pink-700">
          <span className="tracking-wide">Samia’s Boutique</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-pink-700' : 'text-gray-700 hover:text-pink-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/measurements"
            className="ml-2 inline-flex items-center rounded-full bg-pink-600 text-white px-4 py-2 text-sm shadow hover:bg-pink-700 transition"
          >
            Book Your Dress
          </Link>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-pink-700 hover:bg-pink-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-pink-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${
                    isActive ? 'text-pink-700' : 'text-gray-700 hover:text-pink-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/measurements"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-pink-600 text-white px-4 py-2 text-sm shadow hover:bg-pink-700 transition"
            >
              Book Your Dress
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
