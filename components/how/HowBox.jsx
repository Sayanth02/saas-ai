"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HowBox = ({steps, activeStep}) => {


   
  const imageRef = useRef();
  const imageContainer = useRef();

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.fromTo(
        imageContainer.current,
        { opacity: 0, y: -70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: imageContainer.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: imageContainer }
  );

  return (
    <div
      ref={imageContainer}
      className="w-full h-full relative bg-white rounded-2xl"
    >
       {steps.map((step)=> (
        activeStep === step.id && (
          <Image
          key={step.id}
            src={step.image}
            width={1000}
            height={1000}
            className="object-contain w-full h-full rounded-2xl"
            alt="no image"
            priority
          />
        )
       ))

       }

      {/* <Image
        src={"/images/grow.png"}
        width={1000}
        height={1000}
        className="object-contain w-full h-full rounded-2xl"
        alt="no image"
      /> */}

      <Image
        src={"/images/brainSitting.png"}
        width={80}
        height={80}
        ref={imageRef}
        className="absolute -top-15 right-0 hidden lg:flex"
        alt="no image"
      />
    </div>
  );
};

export default HowBox;
