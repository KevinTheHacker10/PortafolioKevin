import React from "react";
import hireMe from "../assets/pic_porftofolio/picPortfolio4.png";

const Hireme: React.FC = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div >
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6 px-4">
            Hire me because I bring a blend of technical expertise and a collaborative approach to every project. With extensive knowledge in various programming languages, I can provide the support you need. I value open communication and teamwork, ensuring your ideas are heard and implemented effectively. My strong problem-solving skills help navigate challenges efficiently, while my commitment to quality ensures clean, maintainable  . I stay up-to-date with industry trends to offer innovative solutions. Dedicated to your success, I aim to deliver results that exceed expectations. Let’s work together to make your vision a reality.
          </p>

          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe.src}
          alt=""
          className="lg:h-[22rem] h-80 lg:absolute bottom-5 -right-3 object-cover rounded-3xl lg:mx-auto"
        />
      </div>
    </section>
  );
};

export default Hireme;
