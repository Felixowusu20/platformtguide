import { FaUserFriends, FaFileAlt, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    icon: <FaUserFriends size={38} className="text-[#22305a] mx-auto mb-2" />,
    title: "Connecting Students and Institutions",
    desc: `At TertiaryGuide, we bring students and tertiary institutions together. Our platform offers a one-stop resource where students can explore different institutions, programs, and admission requirements. We facilitate direct communication, ensuring students stay informed about important dates and updates.`,
  },
  {
    icon: <FaFileAlt size={38} className="text-[#22305a] mx-auto mb-2" />,
    title: "Streamlining the Application Process",
    desc: `We make applying to multiple institutions hassle-free. TertiaryGuide allows you to purchase application forms directly from our platform. This convenience streamlines the application process, making it more accessible and efficient.`,
  },
  {
    icon: <FaHandsHelping size={38} className="text-[#22305a] mx-auto mb-2" />,
    title: "Personalized Guidance for Success",
    desc: `We provide you with all the information about all the best institutions for you, helping you make informed decisions about your academic future. With TertiaryGuide, your path to success is tailored just for you.`,
  },
];

export default function Services() {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12 px-1 sm:px-2 md:px-0 flex flex-col items-center bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#22305a] text-center mb-2">What We Do?<span className="block w-12 h-1 bg-[#FDBE33] mx-auto mt-2 rounded" /></h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {services.map((s, idx) => (
          <div
            key={s.title}
            className="flex flex-col items-center bg-white border border-[#e5e7eb] rounded-2xl shadow-md p-4 sm:p-6 h-full text-center hover:shadow-xl transition-shadow relative min-h-[320px]"
          >
            <div className="mb-2">{s.icon}</div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#22305a] mb-2">{s.title}</h3>
            <p className="text-[#475569] text-xs sm:text-sm md:text-base leading-relaxed">{s.desc}</p>
            {idx < services.length - 1 && (
              <span className="hidden md:block absolute right-0 top-8 h-24 border-r-2 border-[#FDBE33]" style={{zIndex:0}} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
