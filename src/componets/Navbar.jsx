// import logo from "../assets/react.svg"
import logo from "../assets/logo.gif";
import { useState } from "react";
import linkedin from "../assets/LinkedIn_Logo_initials.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="mb-20 flex items-center justify-between py-6">
  {/* Left logo */}
  <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10" src={logo} alt="Logo" />
  </div>

  {/* Right social icons + CV */}
  <div className="flex items-center gap-4 mr-6">
    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/arvind-nataraj-3b4b72320/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="transition transform hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <img className="w-8 h-8" src={linkedin} alt="LinkedIn" />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/ArvindNataraj06"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="bg-black text-white rounded-full p-1 transition transform hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
    >
      <FaGithub size={26} />
    </a>

    {/* Download CV Button */}
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={hovered}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-300
        ${hovered
          ? "bg-gray-400 text-white cursor-not-allowed"
          : "bg-white text-black hover:bg-gray-200"}
      `}
    >
      {hovered ? "Hello! Please Contact Me for CV" : (
        <a href="/cv/arvind_nataraj_cv.pdf" download>
          Download CV
        </a>
      )}
    </button>
  </div>
</div>

  );
};

export default Navbar;
