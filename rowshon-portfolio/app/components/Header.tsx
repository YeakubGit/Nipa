"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#films", label: "Films" },
  { href: "#activism", label: "Activism" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-wider text-amber-500">
          ROWSHON ARA SARKER
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber-400 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="hidden sm:inline-flex px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-amber-500"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-5 border-t border-slate-800 bg-slate-950/95">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium hover:text-amber-400 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-3 bg-amber-500 text-slate-950 font-semibold rounded-lg"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
}