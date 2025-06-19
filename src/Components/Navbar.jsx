import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or use SVGs

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white max-w-7xl mx-auto mt-3 flex justify-between items-center rounded-3xl">
      <div className="bg-[#3c3c3c] text-white h-12 px-3 flex flex-col justify-center rounded-2xl">
        <div className="text-2xl font-bold text-white">MyLogo</div>
      </div>
      <div className="bg-[#3c3c3c] text-white h-12 min-w-96 px-5 flex items-center justify-between rounded-2xl font-bold">
        <a href="#" className="hover:text-[#fb8500]">
          Home
        </a>
        <a href="#" className="hover:text-[#fb8500]">
          About
        </a>
        <a href="#" className="hover:text-[#fb8500]">
          Services
        </a>
        <a href="#" className="hover:text-[#fb8500]">
          Contact
        </a>
      </div>
      <div>
        <div className="h-12 flex items-center bg-[#3c3c3c] text-white rounded-2xl px-3 font-bold">
          <button>Connect</button>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 px-6 py-4 md:hidden">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Services
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
