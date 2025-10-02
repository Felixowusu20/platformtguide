const schools = [
  { name: "KNUST", endDate: "21/04/25", handle: "Buy", logo: "/knust.png" },
  { name: "University of Ghana", endDate: "10/05/25", handle: "Buy", logo: "/ug.png" },
  { name: "UPSA", endDate: "15/06/25", handle: "Buy", logo: "/upsa.png" },
];

export default function SchoolsList() {
  return (
    <section className="w-full px-2 md:px-6 py-10 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-[#22305a] mb-6 text-center tracking-tight">
        Available Schools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {schools.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center border border-[#FDBE33] bg-white/90 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img src={s.logo} alt={s.name} className="h-14 w-14 mb-3 rounded-lg shadow" />
            <h3 className="font-semibold text-lg text-[#22305a] mb-1 text-center">{s.name}</h3>
            <p className="text-sm text-gray-500 mb-2">End Date: <span className="font-medium text-[#FDBE33]">{s.endDate}</span></p>
            <button className="mt-2 px-6 py-2 rounded-full bg-[#FDBE33] text-[#22305a] font-semibold shadow hover:bg-[#fbbf24] transition-colors text-sm md:text-base">
              {s.handle}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
