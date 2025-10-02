"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaWhatsapp, FaHome, FaBook, FaUserFriends, FaUser, FaBell, FaRegNewspaper, FaBullhorn } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home", icon: <FaHome size={20} /> },
  { href: "/wassce-checker", label: "WASSCE", icon: <FaBook size={20} /> },
  { href: "/university-forms", label: "Forms", icon: <FaRegNewspaper size={20} /> },
  { href: "/my-forms", label: "My Forms", icon: <FaUserFriends size={20} /> },
  { href: "/notifications", label: "Alerts", icon: <FaBell size={20} /> },
  { href: "/about", label: "Info", icon: <FaBullhorn size={20} /> },
];

const whatsappNumber = "233501234567"; // Replace with your WhatsApp number
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const threshold = 40;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY <= threshold) {
            setShowNavbar(true);
          } else if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
          } else if (window.scrollY < lastScrollY) {
            setShowNavbar(true);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-500 px-0 md:px-10 py-0 flex items-center justify-center bg-white/50 backdrop-blur-md${showNavbar ? '' : ' -translate-y-full pointer-events-none'}`}
      style={{ borderBottom: '1px solid #e5e7eb', borderRadius: '0 0 12px 12px', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' }}
    >
      {/* Navbar Content (desktop + mobile trigger) */}
      <div className="flex items-center w-full max-w-4xl mx-auto py-2">
        {/* Logo: only show on md+ screens */}
        <Link href="/" className="hidden md:flex flex-col items-center justify-center mr-8 select-none group" style={{ textDecoration: 'none' }}>
          <Image
            src="/tguide.jpg"
            alt="Tertiary Guide Logo"
            width={54}
            height={54}
            priority
            className="rounded-full border-2 border-[#ff9800] bg-white shadow-md object-cover group-hover:scale-105 transition-transform"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
          />
          <span className="mt-1 text-xs font-bold tracking-wide text-[#1a237e] group-hover:text-[#7c3aed] transition-colors">Tertiary Guide</span>
        </Link>
  <ul className="hidden md:flex flex-1 justify-between items-center gap-2 md:gap-6 lg:gap-10 bg-white rounded-xl px-4 py-2 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="flex flex-col items-center group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-200 font-medium text-[16px] 
                    ${isActive ? 'text-[#7c3aed]' : 'text-[#222]'}
                    group-hover:text-[#7c3aed] hover:bg-[#f3f4f6]`}
                  style={{ minWidth: 80, justifyContent: 'center' }}
                >
                  <span className="mr-1">{link.icon}</span>
                  {link.label}
                </Link>
                {/* Active underline for current navlink */}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-[#7c3aed] rounded-full w-4/5 mx-auto transition-all duration-200" />
                )}
              </li>
            );
          })}
        </ul>
        {/* WhatsApp and Login for all screens */}
        <div className="flex items-center ml-auto gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
          <Link
            href="/auth/login"
            className="px-3 py-1.5 rounded-full bg-[#ff9800] text-[#1a237e] font-medium hover:bg-white hover:text-[#ff9800] transition-colors shadow border border-[#ff9800]"
          >
            Login
          </Link>
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white shadow"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Sidebar Drawer */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 h-full w-48 bg-white z-50 shadow-lg flex flex-col items-center pt-8 transition-transform duration-300 md:hidden"
          style={{ borderRadius: '0 16px 16px 0' }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-row items-center justify-start w-full py-4 px-4 gap-3 transition-all duration-200 ${isActive ? 'bg-[#f5f3ff]' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <span className={`text-lg ${isActive ? 'text-[#7c3aed]' : 'text-[#222]'}`}>{link.icon}</span>
                <span className={`text-base font-medium ${isActive ? 'text-[#7c3aed]' : 'text-[#222]'}`}>{link.label}</span>
                {/* Active bar */}
                {isActive && <span className="block absolute left-0 bottom-0 w-full h-1 bg-[#7c3aed] rounded-b-lg mt-2" />}
              </Link>
            );
          })}
        </div>
      )}
      {/* Overlay for mobile sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}