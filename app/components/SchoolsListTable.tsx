"use client";


import { useRouter } from "next/navigation";

const schools = [
  {
    name: "Holy Spirit College",
    logo: "/holyspirit.png",
    verified: true,
    deadline: "30 Sep, 2025",
    handle: "Get Form",
    slug: "holy-spirit-college"
  },
  {
    name: "University of Cape Coast",
    logo: "/ucc.png",
    verified: false,
    deadline: "30 Oct, 2025",
    handle: "Get Form",
    slug: "university-of-cape-coast"
  },
  {
    name: "Kwame Nkrumah University of Science and Technology",
    logo: "/knust.png",
    verified: false,
    deadline: "31 Oct, 2025",
    handle: "Get Form",
    slug: "knust"
  },
  {
    name: "University of Ghana",
    logo: "/ug.png",
    verified: false,
    deadline: "30 Nov, 2025",
    handle: "Get Form",
    slug: "university-of-ghana"
  },
  {
    name: "University of Professional Studies",
    logo: "/upsa.png",
    verified: false,
    deadline: "31 Dec, 2025",
    handle: "Get Form",
    slug: "upsa"
  },
  {
    name: "University of Energy and Natural Resources",
    logo: "/uenr.png",
    verified: false,
    deadline: "15 Jan, 2026",
    handle: "Get Form",
    slug: "uenr"
  },
];

export default function SchoolsListTable() {
  const router = useRouter();
  return (
    <div className="w-full overflow-x-auto py-8 px-1 sm:px-2 md:px-0">
      <table className="min-w-[340px] sm:min-w-[600px] w-full border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg text-xs sm:text-sm md:text-base bg-white">
        <thead>
          <tr className="bg-[#22305a] text-white text-left">
            <th className="py-2 sm:py-3 px-2 sm:px-4 font-bold">Name</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 font-bold">Deadline</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 font-bold">Handle</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((s, idx) => (
            <tr
              key={s.name}
              className={
                idx % 2 === 0
                  ? "bg-[#f7f7fa]"
                  : "bg-white"
              }
              style={{ borderBottom: '1px solid #e5e7eb' }}
            >
              <td className="py-2 sm:py-3 px-2 sm:px-4 flex items-center gap-2 min-w-[120px] sm:min-w-[220px] whitespace-normal break-words">
                <img src={s.logo} alt={s.name} className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-white border" />
                <span className="font-medium text-[#22305a] text-xs sm:text-sm md:text-base flex items-center gap-1">
                  {s.name}
                  {s.verified && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block ml-1"><circle cx="12" cy="12" r="12" fill="#2FA3FF"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </span>
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 text-[#22305a] font-medium text-xs sm:text-sm md:text-base min-w-[80px] sm:min-w-[120px] whitespace-nowrap">{s.deadline}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 min-w-[80px] sm:min-w-[120px]">
                <button
                  className="bg-[#FDBE33] text-[#22305a] px-2 py-2 sm:px-5 sm:py-2 rounded-lg sm:rounded-full font-bold shadow hover:bg-[#fbbf24] hover:scale-105 transition-all text-xs sm:text-sm w-full md:w-auto border-2 border-[#FDBE33] focus:outline-none focus:ring-2 focus:ring-[#FDBE33] focus:ring-offset-2"
                  style={{ minWidth: '90px', maxWidth: '140px' }}
                  onClick={() => router.push(`/buy-form/${s.slug}`)}
                >
                  {s.handle}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
