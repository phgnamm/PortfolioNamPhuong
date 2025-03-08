import { Github, Twitter, Youtube } from "lucide-react";
interface ContactProps {
  isDark: boolean;
}
function Contact({ isDark }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Contact
        </h2>
        <p
          className={`mb-8 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Seasoned Full Stack Software Engineer with over 8 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions.
        </p>
        <p className="text-[#ff6b6b] mb-8">namdang089@gmail.com</p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className={`hover:text-[#ff6b6b] ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <Github />
          </a>
          <a
            href="#"
            className={`hover:text-[#ff6b6b] ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <Twitter />
          </a>
          <a
            href="#"
            className={`hover:text-[#ff6b6b] ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <Youtube />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
