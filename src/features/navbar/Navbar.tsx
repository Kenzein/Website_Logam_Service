import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { navItems } from "./navbar.data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="/" className="text-2xl font-bold text-white">
            Logam <span className="text-blue-500">Service</span>
          </a>
          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white transition hover:text-blue-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Button Mobile */}
          <button
            className="text-3xl text-white md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={isOpen} menus={navItems} />
    </>
  );
}
