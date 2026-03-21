import type { NavLink } from "../../types";
import { useState } from "react";
import "./Header.css";

interface Props {
  title: string;
  links: NavLink[];
}

export function Header({ title, links }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16">
        <div className="flex justify-between py-4">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>

          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
          <nav className="hidden md:flex items-center gap-4 ">
            {links.map((link) => (
              <a key={link.id} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="flex flex-col gap-3 pb-4 md:hidden">
            {links.map((link) => (
              <a key={link.id} href={link.href} className="hover:underline">
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
