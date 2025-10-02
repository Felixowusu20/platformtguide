import Link from "next/link";

const blogs = [
  {
    image: "/blog1.jpg",
    title: "Checking Your WASSCE Results: A Step-by-Step Guide",
    excerpt: {
      short: "How to check your WASSCE results online, step by step.",
      full: "The moment has arrived, and you can now access your results online! Here’s a quick guide on how to check your WASSCE results...",
    },
    link: "/blog/checking-wassce-results",
  },
  {
    image: "/blog2.jpg",
    title: "Keeping Your Cool While Awaiting Your WASSCE Results",
    excerpt: {
      short: "Tips for staying calm while waiting for your WASSCE results.",
      full: "The West African Senior School Certificate Examination (WASSCE) marks a significant milestone in the academic journey of...",
    },
    link: "/blog/keeping-cool-wassce-results",
  },
  {
    image: "/blog3.jpg",
    title:
      "Be Part of Africa’s Tech Future: Join the Ultimate Tech Quiz as a Sponsor, Mentor, Partner, or Volunteer!",
    excerpt: {
      short: "Join Africa's Tech Quiz as a sponsor, mentor, or partner!",
      full: "At Alphafind, we are committed to building a bright future for Africa by equipping...",
    },
    link: "/blog/africa-tech-future-quiz",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-12 px-1 sm:px-2 md:px-0 flex flex-col items-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[#22305a] text-center mb-2">
        Our Blog
        <span className="block w-12 h-1 bg-[#FDBE33] mx-auto mt-2 rounded" />
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mt-8">
        {blogs.map((b) => (
          <div
            key={b.title}
            className="flex flex-col bg-white border border-[#e5e7eb] rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full overflow-hidden"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-40 sm:h-44 object-cover rounded-t-2xl"
            />
            <div className="flex flex-col flex-1 p-3 sm:p-4">
              <Link
                href={b.link}
                className="font-bold text-base md:text-lg text-[#22305a] mb-2 underline hover:text-[#FDBE33] transition-colors"
              >
                {b.title}
              </Link>
              <p className="text-[#475569] text-xs sm:text-sm md:text-base flex-1 mb-4">
                <span className="block sm:hidden">{b.excerpt.short}</span>
                <span className="hidden sm:block">{b.excerpt.full}</span>
              </p>
              <Link
                href={b.link}
                className="mt-auto inline-block px-4 sm:px-5 py-2 rounded-lg sm:rounded-full bg-[#FDBE33] text-[#22305a] font-semibold shadow hover:bg-[#fbbf24] transition-colors text-xs md:text-sm text-center w-full"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
