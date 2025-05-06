import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="">
      <p className="">
        Code is my craft, curiosity is my fuel — let’s build something great!
      </p>

      <h1 className="">
        Hi, I’m ELISABET HEIN
      </h1>

      <p className="">
        A Full Stack Developer
      </p>

      <div className="mt-8">
        <img
          src="/src/assets/profile_pic.jpg"
          alt="Elisabet Hein"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
