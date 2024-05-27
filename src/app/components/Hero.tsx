import React from "react";
import Image from "next/image";
import hero from "../assets/pic_porftofolio/picPortfolio5.png";
// import hero from "../assets/images/hero.png";
const Hero: React.FC = () => {
  const social_media: string[] = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full mt-[60px]">
        <img src={hero.src} alt="ProfilePicture" className="md:w-08/10 h-full object-cover md:rounded-full" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Kevin Murillo</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <a href="https://www.linkedin.com/in/kevin-alejandro-murillo-salazar-590263174/" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {/* <ion-icon name={icon}></ion-icon> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
