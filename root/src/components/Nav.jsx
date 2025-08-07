import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 👈 Detect route changes

  // Auto-hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
        setMenuOpen(false); // Close menu on scroll down
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔁 Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[11] h-[100px] transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-full w-full bg-[#efecdb] flex justify-between items-center px-4 md:px-10">
        {/* Logo */}
        <div className="w-[160px] md:w-[200px]">
          <img src="/root logo.png" alt="Logo" className="w-full" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-6 font-extrabold text-2xl md:text-3xl amatic">
          <Link
            to="/catalogue"
            className="hover:text-black text-[#00b3ce] uppercase transition-all p-2"
          >
            catalogue
          </Link>
          <Link
            to="/contact"
            className="hover:text-black text-[#00b3ce] uppercase transition-all p-2"
          >
            contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#00b3ce]"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#efecdb] flex flex-col items-end pr-10 font-extrabold text-2xl amatic py-4">
          <Link
            to="/catalogue"
            className="hover:text-black text-[#00b3ce] uppercase transition-all p-2 active:scale-95  duration-150 ease-in-out"
          >
            catalogue
          </Link>
          <Link
            to="/contact"
            className="hover:text-black text-[#00b3ce] uppercase transition-all p-2 active:scale-95  duration-150 ease-in-out"
          >
            contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
