import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => setMenuOpen(true), 10);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 300);
  };

  const toggleMenu = () => {
    if (menuOpen) closeMenu();
    else openMenu();
  };

  // Cierra menú al cambiar de ruta
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const handleLinkClick = () => {
    closeMenu();
  };

  const navClasses = `
    overflow-hidden
    transition-[max-height]
    duration-300
    ease-in-out
    md:overflow-visible md:max-h-full md:flex
    ${menuVisible ? "max-h-[500px]" : "max-h-0"}
    flex-col md:flex-row md:items-center gap-4
  `;

  return (
    <header className="bg-slate-100 sticky top-0 border-b z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap p-4">
        <Link to="/" className="text-xl font-bold text-canard-1">
          {/* Aquí podrías poner tu logo */}
          MiLogo
        </Link>

        {/* Botón hamburguesa solo visible en md- */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-emerald-600 text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        {/* Menú responsive */}
        <nav className={navClasses}>
          <Link to="/" onClick={handleLinkClick} className="nav__item">
            Inicio
          </Link>
          <Link to="/about-us" onClick={handleLinkClick} className="nav__item">
            About
          </Link>
          <Link to="/recipes" onClick={handleLinkClick} className="nav__item">
            Services
          </Link>
          <Link to="/farm-life" onClick={handleLinkClick} className="nav__item">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBarComponent;
