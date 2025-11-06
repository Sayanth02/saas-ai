'use client'
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
gsap.registerPlugin(useGSAP);

const TrustUs = () => {
    const marqueeRef = useRef(null);
    const logos = [
        "/images/b1.png",
        "/images/b2.png",
        "/images/b3.png",
        "/images/b4.png",
        "/images/b5.png",
        "/images/b6.png",
        "/images/b7.png",
        "/images/b8.png",
    ]


     useGSAP(
       () => {
         gsap.to(".marquee-track", {
           xPercent: -50,
           repeat: -1,
           duration: 20,
           ease: "linear",
         });
       },
       { scope: marqueeRef }
     );

  return (
    <div className="w-full py-12">
      <div className="text-center mb-12">
        <h3 className="text-primary text-xl font-semibold tracking-tight">
          Trusted by teams and innovators worldwide
        </h3>
      </div>
      <div ref={marqueeRef} className="relative overflow-hidden">
        <div className="flex marquee-track gap-12 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="shrink-0 grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={logo}
                alt="Brand logo"
                width={100}
                height={40}
                className="object-contain opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustUs