import { ExternalLink } from "lucide-react";
import anh1 from "../image/Suzy x StartUp 2020.png";
import anh2 from "../image/Suzy.png";
import anh3 from "../image/hehe.png";
import anh4 from "../image/tải xuống.png";
function Projects() {
  const projects = [
    {
      title: "HTML TUTORIAL",
      image: anh1,
      tech: "HTML",
    },
    {
      title: "CSS TUTORIAL",
      image: anh2,
      tech: "CSS",
    },
    {
      title: "HTML TUTORIAL",
      image: anh3,
      tech: "HTML",
    },
    {
      title: "CSS TUTORIAL",
      image: anh4,
      tech: "CSS",
    },
  ];
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden shadow-lg border-1 border-gray-400 transform transition-transform hover:scale-102 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover rounded-xl"
                style={{ objectPosition: "center 25%" }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    CLICK HERE TO VISIT
                  </span>
                  <ExternalLink className="opacity-0 group-hover:opacity-100 transition text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
