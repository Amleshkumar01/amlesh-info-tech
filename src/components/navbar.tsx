"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Wordmark */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-2 py-1 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:text-[#2563EB] ${
                  isActive ? "bg-slate-900 text-white hover:text-white" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button className="bg-[#0A1628] hover:bg-[#0A1628]/90 text-white font-medium flex items-center gap-2 rounded-full px-5 py-2 text-sm transition-all hover:-translate-y-[1px] shadow-md shadow-slate-900/10">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center p-2 text-gray-600 md:hidden hover:text-[#0A1628] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-150 bg-white px-4 py-4 space-y-3 shadow-md animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50 hover:text-[#2563EB] ${
                  isActive ? "text-[#2563EB] bg-blue-50/50" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-100">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#0A1628] hover:bg-[#0A1628]/95 text-white flex items-center justify-center gap-2 rounded-full py-2">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
