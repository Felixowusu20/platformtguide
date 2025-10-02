
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-[#17213a] text-[#ffe9b0] px-4 md:px-10 py-1 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm font-medium gap-2 md:gap-0">
      <div className="flex items-center gap-4">
        <a
          href="https://wa.me/233595110767"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[#25D366] transition-colors"
        >
          <FaWhatsapp size={15} color="#25D366" />
          +233 59 511 0767
        </a>
        <span className="hidden md:inline-block">|</span>
        <span>info@tertiaryguide.com</span>
      </div>
      <div className="flex items-center gap-3 mt-1 md:mt-0">
        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FaFacebookF size={16} /></a>
        <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><FaTwitter size={16} /></a>
        <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><FaInstagram size={16} /></a>
      </div>
      </div>
  );
}
