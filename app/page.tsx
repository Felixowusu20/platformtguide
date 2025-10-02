

import Hero from "../app/components/HeroCarousel";
import ShortMessage from "../app/components/ShortMessage";
import SearchEngine from "../app/components/SearchEngine";
import SchoolsListTable from "./components/SchoolsListTable";
import Services from "../app/components/Services";
import BlogSection from "./components/BlogSection";
import Allabout from "./components/Allabout";
import Testimonials from "./components/Testimonials";
import FAQ from "../app/components/FAQ";
import ContactForms from "../app/components/ContactForms";
import Chatbot from "./components/Chatbot";
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f8fafc] flex flex-col items-center">
      <Hero />
      <div className="w-full max-w-6xl px-2 sm:px-4 md:px-8 flex flex-col gap-8 sm:gap-10 md:gap-14 mt-6">
        <ShortMessage />
        <SearchEngine />
        <SchoolsListTable />
        <Services />
        <BlogSection />
        <Allabout />
        <Testimonials />
        <ContactForms />
        <FAQ />
        <Chatbot />
      </div>

    </main>
  );
}