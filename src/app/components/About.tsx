"use client"

import React from "react";
import aboutImg from "../assets/pic_porftofolio/picPortfolio3.png";

interface InfoItem {
  text: string;
  count: string;
}

const About: React.FC = () => {
  const info: InfoItem[] = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "07" },
    { text: "Companies Work", count: "03" },
  ];

  const URL_CV =
  "https://drive.google.com/uc?export=download&id=1PeFqp261UKvS6QeHGE66Tj8qV6E35Bvw";

  const handleDescargarCV = () => {
    // Simplemente redirecciona al usuario a la URL de descarga del CV
    window.location.href = URL_CV;
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-1 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              I’ll gladly help you develop your code. I’m open to discussion and can assist you with whatever you need. We can work on project planning, code development, review and improvement, and implementation and deployment. I can also provide educational resources to expand your knowledge. No matter your experience level, there’s always something new to learn. What would you like to start with? Let’s turn your vision into reality!</p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary" onClick={()=>handleDescargarCV()} >Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg.src}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
