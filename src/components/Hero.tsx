import imageprofile from "../image/Doona Bae Suzy wallpaper.png";
import { motion } from "framer-motion";
import { useState } from "react";
interface HeroProps {
  isDark: boolean;
}
function Hero({ isDark }: HeroProps) {
  const [showCat, setShowCat] = useState(false);

  const handleClick = () => {
    setShowCat(true);
    setTimeout(() => {
      setShowCat(false);
    }, 5000); // Con mèo sẽ biến mất sau 5 giây
  };
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-32 h-32 mb-8 mx-auto rounded-full overflow-hidden border-4 border-[#4da3ff]">
          <img
            src={imageprofile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          className={`text-4xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          I do code and <br /> make content{" "}
          <span className="text-[#ff6b6b]">about</span>{" "}
          <span className="text-[#b16cea]">it!</span>
        </h1>
        <p
          className={`max-w-2xl mx-auto mb-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleClick}
            className="px-6 py-2 rounded-full bg-blue-400 hover: cursor-pointer hover:bg-blue-500"
          >
            {" "}
            Get in Touch
          </button>
          <button
            onClick={() => window.open("https://www.youtube.com/", "_blank")}
            className={`border ${
              isDark
                ? "border-white text-white"
                : "border-gray-900 text-gray-900"
            } px-6 py-2 rounded-full hover:bg-opacity-10 hover:bg-current transition`}
          >
            {" "}
            Download CV
          </button>
        </div>
        {showCat && (
          <motion.img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTZvanE3ZG8wcDMwYWpkdjh5ZDhmNjByZmFlZ3g5eGcwZHUzdWl3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iq6seBGBW5SSdJn8Yf/giphy.gif"
            alt="Cute Cat"
            className="w-32 h-32 fixed bottom-10 right-10"
            initial={{ x: 300, y: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </div>
    </section>
  );
}

export default Hero;
