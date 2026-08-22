"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "CueSync Case Study", href: "/projects/cuesync" },
    // { label: "Resume", href: "/resume" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-14">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer active:opacity-70 transition-opacity"
        >
          <span
            className="material-symbols-outlined text-primary text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            terminal
          </span>
          <span className="font-headline-md text-xl md:text-2xl font-bold tracking-tight text-on-surface">
            ip192htw
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-lg text-xs uppercase tracking-widest transition-colors py-1 px-2 rounded ${
                  isActive
                    ? "text-primary font-bold bg-surface-container-high/60"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer px-3 py-1.5 rounded hover:bg-surface-container-high/50 flex items-center gap-1 uppercase tracking-widest"
            aria-label="Toggle Navigation Menu"
          >
            <span>Menu</span>
            <span className="material-symbols-outlined text-[16px]">
              {mobileMenuOpen ? "close" : "unfold_more"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-outline-variant bg-surface-container-low px-4 py-3 flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-lg text-xs uppercase tracking-widest py-2 px-3 rounded transition-colors ${
                  isActive
                    ? "text-primary font-bold bg-surface-container-high"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
