import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-btn shadow-xl bg-gradient-to-t from-bg-btn to-btntwo px-4 py-2 text-white rounded-lg  hover:bg-[#3e7147] transition-colors duration-300 h-fit">
      {label}
    </button>
  );
};

export default Button;
