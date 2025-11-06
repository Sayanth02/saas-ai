"use client";
import React, { useRef } from "react";
import Button from "../common/Button";
import WhyCard from "./WhyCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
const WhyUs = () => {
  const features = [
    {
      title: "Sarah Chen",
      designation: " - Senior Product Manager @ Google",
      description:
        "TalkFusion helped me land my dream role at Google. The AI career coach understood my goals and created a personalized roadmap that actually worked.",
      image: "/images/sarah.png",
    },
    {
      title: "Marcus Rodriguez",
      designation: " - Founder @ TechStart",
      description:
        "I've tried countless productivity apps. TalkFusion is the first one that adapts to how I actually work. It's like having a personal executive coach 24/7.",
      image: "/images/marcus.png",
    },
    {
      title: "Priya Patel",
      designation: " - Engineering Lead @ Microsoft",
      description:
        "The time management insights alone saved me 10+ hours per week. The ROI is incredible.",
      image: "/images/priya.png",
    },
  ];

  const container = useRef();
  const container2 = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container2.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="w-full lg:max-w-[75%] h-full rounded-lg  flex flex-col space-y-6  mx-auto px-4 md:px-15 py-20 bg-background2 "
    >
      <button className="px-4  bg-white text-primary backdrop-blur-2xl rounded-md shadow-lg w-fit ">
        Benefits
      </button>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Why Talks Fusion Works for You
      </h1>
      <div className="flex flex-col md:flex-row justify-between space-y-4 items-center">
        <p className="text-sm text-primary w-3/4 font-semibold">
          From startup founders to Fortune 500 leaders, professionals across
          industries rely on TalkFusion to unlock their full potential. Our
          AI-powered career and productivity platform provides personalized
          coaching, actionable insights, and real results — helping you work
          smarter, grow faster, and achieve your goals with confidence.
        </p>
        <Button label="Learn More" />
      </div>

      <div
        ref={container2}
        className="w-full h-full flex flex-col flex-wrap xl:flex-row justify-between gap-6 items-stretch"
      >
        {features.map((feat, index) => (
          <WhyCard
            name={feat.title}
            desig={feat.designation}
            description={feat.description}
            key={index}
            url={feat.image}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
