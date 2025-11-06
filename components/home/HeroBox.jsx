"use client";

import React, { useEffect, useRef } from "react";
import Card from "./Card";
import { Clock, BarChart, Hammer, Handshake, Target } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    title: "Time Management Coaching",
    description: "Master your schedule and boost productivity.",
    color: "bg-red-600",
    icon: Clock,
    className: "top-10 -left-30 rotate-6 HomeCard1 ",
  },
  {
    title: "Career Planning",
    description: "Strategize your next move with expert guidance.",
    color: "bg-green-600",
    icon: BarChart,
    className: "bottom-10 -left-32 -rotate-6 HomeCard2",
  },
  {
    title: "Skill Building",
    description: "Upskill in areas that matter most to your career.",
    color: "bg-purple-600",
    icon: Hammer,
    className: "bottom-10 -right-32 rotate-6 HomeCard3",
  },
  {
    title: "Networking Tactics",
    description: "Learn the art of authentic connection building.",
    color: "bg-yellow-600",
    icon: Handshake,
    className: "top-10 -right-30 -rotate-6 HomeCard4",
  },
  {
    title: "One-on-One Coaching",
    description: "Tailored sessions to unlock your potential.",
    color: "bg-blue-600",
    icon: Target,
    className: "left-1/2 -translate-x-1/2 bottom-0 HomeCard5",
  },
];

const HeroBox = () => {
  const boxRef = useRef();
  const cardRefs = useRef([]);

  useGSAP(
    () => {

         gsap.set(boxRef.current, {
           y: 50,
           scale:0.7,
           opacity: 0.5 // Start 50 pixels above
         });
         gsap.to(boxRef.current, {
           opacity: 1, // Animate to fully visible
           y: 0, // Move up 50 pixels
           scale: 1,
           duration: 1, // 2 seconds
           ease: "power2.inOut",
         });


      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: boxRef.current,
      //     start: "top 50%",
      //     end: "bottom 60%",
      //     toggleActions: "play none none reverse",
      //     markers: true,
      //   },
      // });

      gsap.fromTo(".homeCard", { opacity: 0 }, { opacity: 1, duration: 1 });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 50%",
          end: "bottom -40%",
          toggleActions: "play none none reverse",
          scrub: true,
          // pin: true,
        },
      });

      tl2.fromTo(
        ".HomeCard1",
        { x: 0 },
        { x: -200, duration: 1, rotate: 50 },
        "<"
      );
      tl2.fromTo(
        ".HomeCard2",
        { x: 0 },
        { x: -200, duration: 1, rotate: -20 },
        "<"
      );
      tl2.fromTo(
        ".HomeCard3",
        { x: 0 },
        { x: 200, duration: 1, rotate: 40 },
        "<"
      );
      tl2.fromTo(
        ".HomeCard4",
          { x: 0 },
          { x: 200, duration: 1, rotate: -40 },
          "<"
        );
      tl2.fromTo(".HomeCard5", { y: 0 }, { y: 100, duration: 1 }, "<");
    },
    { scope: boxRef }
  );

  return (
    <div
      ref={boxRef}
      className=" rounded-2xl p-6 w-full lg:w-[65%] min-h-[80vh] relative"
    >
      <Image
        src={"/images/saas-bg1.png"}
        fill
        className="object-cover  rounded-4xl border-4 border-btn "
        alt="no image"
      />
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          color={card.color}
          icon={card.icon}
          className={card.className}
          ref={(el) => (cardRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default HeroBox;
