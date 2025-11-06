"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Button from "@/components/common/Button";
import HeroBox from "@/components/home/HeroBox";
import { gsap } from "gsap";

const HomePage = () => {
  const myHeader = useRef();

  useEffect(() => {
    gsap.set(".header", {
      y: 50,
    });
    gsap.to(".header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="bg-white flex flex-col space-y-4 items-center justify-center min-h-screen rounded-2xl ">
      <div ref={myHeader} className="flex flex-col md:mt-25 opacity-0 header">
        <div className="flex space-x-2 md:space-x-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Meet your AI
          </h1>
          <Image
            src="/images/cartoon-brain-drawing.png"
            width={90}
            height={90}
            className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            alt="no image"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Master Your Skills .
        </h1>
      </div>
      <div ref={myHeader} className="text-center opacity-0 header">
        <p className="text-xs md:text-lg text-primary max-w-[600px] mb-4">
          Transform your career trajectory with personalized insights,
          intelligent goal tracking, and expert guidance—all powered by
          cutting-edge AI.
        </p>
        <Button label={"Try For Free"} />
      </div>
      <HeroBox />
    </div>
  );
};

export default HomePage;
