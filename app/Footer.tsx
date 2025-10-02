
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaBehance, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a2235] text-[#e0e6f6] pt-12 pb-4 px-4 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#2c3650] pb-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-3">About Us</h3>
          <p className="text-sm mb-4 leading-relaxed text-[#b0b8c9]">Tertiary Guide is your trusted companion for all things tertiary education. We empower your journey with resources, guidance, and up-to-date information.</p>
          <div className="flex items-center gap-2 mt-2">
            <Image src="/tguide.jpg" alt="Tertiary Guide Logo" width={38} height={38} className="rounded-full border-2 border-[#ff9800] bg-white" />
            <span className="text-lg font-bold tracking-wide text-[#ffbe33]">Tertiary Guide</span>
          </div>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Info</h3>
          <p className="text-sm text-[#b0b8c9]">Address: 123 Academic Lane, Accra, Ghana</p>
          <p className="text-sm text-[#b0b8c9]">Phone: +233 59 511 0767</p>
          <p className="text-sm text-[#b0b8c9]">info@tertiaryguide.com</p>
        </div>
        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/wassce-checker" className="hover:text-[#ffbe33] transition-colors">WASSCE Checker</Link></li>
            <li><Link href="/university-forms" className="hover:text-[#ffbe33] transition-colors">University Forms</Link></li>
            <li><Link href="/my-forms" className="hover:text-[#ffbe33] transition-colors">My Forms</Link></li>
            <li><Link href="/about" className="hover:text-[#ffbe33] transition-colors">About Us</Link></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3">Newsletter</h3>
          <p className="text-sm mb-3 text-[#b0b8c9]">Stay updated with the latest in tertiary education. Subscribe to our newsletter.</p>
          <form className="flex items-center bg-[#232c43] rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-[#b0b8c9] focus:outline-none"
            />
            <button type="submit" className="bg-[#ffbe33] text-[#1a2235] px-4 py-2 flex items-center justify-center hover:bg-[#ff9800] transition-colors">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-[#b0b8c9]">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Tertiary Guide. All rights reserved.</div>
        
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-[#ffbe33] transition-colors"><FaFacebookF size={18} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#ffbe33] transition-colors"><FaTwitter size={18} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#ffbe33] transition-colors"><FaInstagram size={18} /></a>
          <a href="#" aria-label="Website" className="hover:text-[#ffbe33] transition-colors"><FaGlobe size={18} /></a>
          <a href="#" aria-label="Behance" className="hover:text-[#ffbe33] transition-colors"><FaBehance size={18} /></a>
        </div>
      </div>
    </footer>
  );
}


