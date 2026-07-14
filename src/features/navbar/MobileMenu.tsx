import type { NavItem } from "./navbar.types";

interface MobileMenuProps {
  isOpen: boolean;
  menus: NavItem[];
}

function MobileMenu({ isOpen, menus }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-16 left-0 z-40 w-full bg-black md:hidden">
      <div className="flex flex-col">
        {menus.map((menu) => (
          <a
            href={menu.href}
            key={menu.href}
            className="border-b border-white/10 px-6 py-4 text-white hover:bg-white/10"
          >
            {menu.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
