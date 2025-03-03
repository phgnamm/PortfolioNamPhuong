import { Award } from "lucide-react";
import anh1 from "../image/anh11.png";
import anh2 from "../image/SUZY x K2 2022 F_W Collection.png";
import anh3 from "../image/Bae Suzy hihi.png";
interface CertificatesProps {
  isDark: boolean;
}
function Certificates({ isDark }: CertificatesProps) {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "March 2024",
      image: anh1,
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "January 2024",
      image: anh2,
    },
    {
      title: "React Native Specialization",
      issuer: "Coursera",
      date: "December 2023",
      image: anh3,
    },
  ];
  return (
    <section id="certificates" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 ">
          CERTIFICATES
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`${
                isDark ? "bg-[#111] text-white" : "bg-white text-gray-900"
              } rounded-lg overflow-hidden shadow-md border border-[#4da3ff]/30 transform transition-transform hover:scale-102 cursor-pointer`}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start mb-3">
                  <Award className="text-[#4da3ff] mr-1.5 flex-shrink-0 size={18}" />
                  <h3 className="font-bold text-sm">{cert.title}</h3>
                </div>
                <div
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <p>{cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
