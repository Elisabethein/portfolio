import React from 'react';

const About: React.FC = () => {
  return (
    <section className="">
        <h2 className="">About Me</h2>

        <div className=''>
            <p className="">
            I am a passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. My journey in tech has been fueled by curiosity and a love for problem-solving.
            </p>

            <div className="mt-8">
                <img
                src="/src/assets/profile_pic.jpg"
                alt="About Me"
                className="w-40 h-40 object-cover shadow-lg"
                />
            </div>



        </div>


        </section>
  );
};

export default About;