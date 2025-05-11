import React from 'react';
import { ReactTyped } from "react-typed";

const Hero: React.FC = () => {
  return (
    <section className="mt-40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-4xl inner-shadow">
        Code is my craft, curiosity is my fuel — let’s build something great!
      </h1>

      <div className="mt-12 mb-20 flex flex-col items-center justify-center">
        <div className="text-lg sm:text-xl">
          <h2 className="text-3xl sm:text-4xl font-semiboldt">
            Hi, I’m <span className="text-orange-300 bg-gradient-to-b from-orange-300 via-orange-300 to-orange-500 text-transparent bg-clip-text">ELISABET HEIN</span>
          </h2>

          <p className="mt-2 text-orange-100 inner-shadow">
            <ReactTyped
              strings={['Full-Stack Developer', 'Student', 'Problem Solver', 'Lifelong Learner']}
              typeSpeed={70}
              backSpeed={30}
              loop
            />
          </p>
        </div>

        <div className="mt-8">
          <img
            src="/src/assets/profile_pic.jpg"
            alt="Elisabet Hein"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-orange-100 relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
