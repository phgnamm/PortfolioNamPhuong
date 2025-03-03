interface ExperienceProps {
  isDark: boolean;
}
function Experience({ isDark }: ExperienceProps) {
  const experiences = [
    {
      company: "Google",
      role: "Lead Software Engineer",
      period: "Nov 2019 - Present",
      description:
        "Trong vai trò Kỹ sư Phần mềm Cấp cao tại Google, tôi đã đóng vai trò quan trọng trong việc phát triển các giải pháp sáng tạo cho các thuật toán tìm kiếm cốt lõi của Google. tôi đảm nhận vai trò Kiến trúc sư Phần mềm, nơi tôi đóng vai trò quan trọng trong việc định hình kiến trúc của các dự án phần mềm trọng yếu. Nhiệm vụ của tôi bao gồm thiết kế các hệ thống có độ tin cậy cao, tối ưu hóa quy trình phát triển phần mềm và đảm bảo tính bảo mật cũng như hiệu suất của sản phẩm.",
    },
    {
      company: "Apple",
      role: "Junior Software Engineer",
      period: "Jan 2016 - Dec 2017",
      description:
        "Trong thời gian làm việc tại Apple, tôi đảm nhận vai trò Kiến trúc sư Phần mềm, nơi tôi đóng vai trò quan trọng trong việc định hình kiến trúc của các dự án phần mềm trọng yếu. Nhiệm vụ của tôi bao gồm thiết kế các hệ thống có độ tin cậy cao, tối ưu hóa quy trình phát triển phần mềm và đảm bảo tính bảo mật cũng như hiệu suất của sản phẩm.",
    },
  ];
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 ">
          EXPERIENCE
        </h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-l-2 border-blue-500 pl-8 relative"
            >
              <div className="absolute w-4 h-4 rounded-full -left-[8px] top-0 bg-blue-500" />
              <h3
                className={`text-xl font-bold mb-1 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {exp.role} at {exp.company}
              </h3>
              <p
                className={`text-sm mb-4 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.period}
              </p>
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
