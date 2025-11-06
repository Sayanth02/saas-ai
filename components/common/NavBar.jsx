"use client";
import React, { useState } from "react";
import Button from "./Button";
import { CircleX, FlipHorizontal2, Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex justify-end md:justify-center md:items-center p-3 md:fixed top-10 left-0 z-50">
      <nav className="bg-gray-100 backdrop-blur-2xl rounded-lg p-1 text-sm text-primary">
        {/* desktop menu */}
        <ul className="hidden md:flex justify-center items-center gap-6">
          <li className="bg-btn p-1 rounded-lg">
            <FlipHorizontal2 className="text-white" size={20} />
          </li>
          <li>Home</li>
          <li>Features</li>
          <li>About Us</li>
          <li>Blogs</li>
          <li>FAQ</li>
          <li>
            <Button label={"SignUp"} />
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <Menu />
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-0 right-0 bg-btn w-full text-white py-5">
          <button
            onClick={(e) => setIsOpen(!isOpen)}
            className="absolute top-3 right-3"
          >
            <CircleX />
          </button>
          <ul className="md:hidden flex flex-col items-center gap-4 ">
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
