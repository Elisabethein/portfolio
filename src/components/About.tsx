import React from 'react';
import AboutCarousel from './subcomponents/ImageCarousel';

const About: React.FC = () => {
  return (
    <section className="mt-40 flex flex-col sm:flex-row items-start justify-between px-4">
      <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
        <h2 className="text-3xl font-semibold">About Me</h2>

        <div className="mt-6">
            <p className="mb-4">
            I’m Elisabet Hein - currently in my final year of Computer Science at the University of Tartu! I love coding, especially anything to do with full-stack development or AI, and I’m always curious to try new tech and build cool stuff.
            </p>
            <p className='mb-4'>
            I’ve worked on all kinds of projects - from backend systems and APIs to fun data science experiments and UI/UX designs. Learning and growing are super important to me, whether that’s picking up a new framework or figuring out how to make things work better.
            </p>
            <p className='mb-4'>
            Outside of code, I like staying active (hello gym life 💪), exploring new places, and occasionally diving into arts and crafts. Welcome to my page - feel free to look around!
            </p>
        </div>
      </div>

      <div className="sm:w-1/2">
          <AboutCarousel />
      </div>

    </section>
  );
};

export default About;