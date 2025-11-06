import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WhyCard = ({ url, name, description, desig }) => {
  return (
    <div className="flex-1 bg-white rounded-2xl flex flex-col card">
      <Image
        src={url}
        width={300}
        height={300}
        className="w-full h-[300px] object-cover rounded-t-lg shrink-0"
        alt="No image"
      />
      <div className="p-2 flex-1 flex flex-col">
        <h2 className="text-xl font-bold my-2">{name}</h2>
        <h3 className="mb-2 font-semibold text-zinc-500">{desig}</h3>
        <p className="text-sm text-primary flex-1">{description}</p>
      </div>
    </div>
  );
};

export default WhyCard;
