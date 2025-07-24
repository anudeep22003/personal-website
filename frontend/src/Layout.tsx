import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { routes } from "./router";

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathsUnderLayout = routes[0].children;
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // For back navigation

  const links = pathsUnderLayout
    .filter((path) => !path.path.includes(":"))
    .map((path) => ({
      label:
        path.path === "/"
          ? "home"
          : path.path.replace("/", "").replace(/-/g, " "),
      href: path.path,
      element: path.element,
    }));

  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black font-sans">
      <nav className="w-full flex justify-center p-4 mb-0 sticky top-0 z-50 bg-white/10 backdrop-blur border-b border-neutral-200">
        {/* Hamburger for mobile */}
        <div className="flex w-full items-center justify-between md:hidden">
          <span className="font-bold text-lg">
            {isHome ? (
              "home"
            ) : (
              <button
                aria-label="Go back"
                className="flex items-center px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600/20"
                onClick={() => navigate(-1)}
              >
                {/* Simple left arrow SVG */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span className="ml-1">back</span>
              </button>
            )}
          </span>
          <button
            aria-label="Open menu"
            className="p-2 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {/* Hamburger icon */}
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="8" x2="23" y2="8" />
              <line x1="5" y1="14" x2="23" y2="14" />
              <line x1="5" y1="20" x2="23" y2="20" />
            </svg>
          </button>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="text-base lowercase tracking-wide text-neutral-700 hover:text-green-600 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-600/20"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="block text-base lowercase tracking-wide text-neutral-700 hover:text-green-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600/20"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <main className="flex-1 w-full flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
