import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-14 bg-orange-100/10 backdrop-blur-md opacity-80 flex flex-col items-center justify-center gap-6 z-50 shadow-md">  <a href="https://github.com/elisabethein/" target="_blank" rel="noopener noreferrer">
        <FaGithub size={22} className="text-orange-300 hover:text-orange-500 transition" />
      </a>
      <a href="https://www.linkedin.com/in/elisabet-hein-0862a3259/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={22} className="text-orange-300 hover:text-orange-500 transition" />
      </a>
      <a href="/portfolio/Elisabet_Hein_CV_2025.pdf" download type="application/pdf">
        <HiOutlineDocumentDownload size={22} className="text-orange-300 hover:text-orange-500 transition" />
      </a>
      <a href="mailto:elisabethein28@gmail.com">
        <FaEnvelope size={22} className="text-orange-300 hover:text-orange-500 transition" />
      </a>
    </div>
  );
};

export default SocialSidebar;
