import { Link, Outlet } from "react-router";
import { routes } from "./router";

const RootLayout = () => {
  const pathsUnderLayout = routes[0].children;


  const links = pathsUnderLayout.map((path) => ({
    label: path.path === "/" ? "home" : path.path.replace("/", "").replace(/-/g, " "),
    href: path.path,
    element: path.element,
  }));
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black font-sans">
      <nav className="w-full flex justify-center p-8 mb-0">
        <ul className="flex gap-8">
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
      </nav>
      <main className="flex-1 w-full flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
