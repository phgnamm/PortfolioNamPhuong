import csharp from "../image/csharp.png";
import css3 from "../image/css3.png";
import redis from "../image/redis.png";
import reactjs from "../image/reactjs (1).png";
import figma from "../image/figma.png";
import tailwind from "../image/tailwindcss.png";
import typescript from "../image/typescript.png";
import postgresql from "../image/postgresql.png";
interface TechStackProps {
  isDark: boolean;
}
function TechStack({ isDark }: TechStackProps) {
  const techStack = [
    { name: "C#", img: csharp },
    { name: "Figma", img: figma },
    { name: "React", img: reactjs },
    { name: "CSS", img: css3 },
    { name: "Redis", img: redis },
    { name: "Tailwind", img: tailwind },
    { name: "Typescript", img: typescript },
    { name: "Postgresql", img: postgresql },
  ];
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1
          className={`text-center mb-8 text-4xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Experience <span className="text-blue-400">with</span>
        </h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {techStack.map(({ name, img }) => (
            <div
              key={name}
              className="w-16 h-16 shadow-lg rounded-lg flex items-center justify-center  hover:scale-110 transition duration-300"
              title={`${name} - 1 year experience`}
            >
              <img
                src={img}
                alt="{name}"
                className="w-14 h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
