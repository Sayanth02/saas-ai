"use client";
import React, { useRef, useState } from "react";
import HowBox from "./HowBox";
import Button from "../common/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HowPage = () => {
    const [activeStep, setActiveStep] = useState(1);

     const steps = [
          {
            id: 1,
            title: "Share Your Goals",
            image: "/images/share.png", 
          },
          {
            id: 2,
            title: "Get Your Plan",
            image: "/images/plan.png",
          },
          {
            id: 3,
            title: "Grow with Guidance",
            image: "/images/grow.png",
          },
        ];
  return (
    <div className="min-w-[75%]  bg-background2 rounded-lg  flex flex-col  items-center space-y-6 mx-auto relative p-8 md:p-10">
      <button className="px-4 py-1 border bg-white  rounded-md w-fit backdrop-blur-2xl text-primary shadow-lg">
        How it Works
      </button>
      <div className="text-4xl lg:text-5xl font-bold flex flex-col space-y-3 text-center">
        <h1>Your journey,</h1>
        <h1>Simplified in 3 Steps</h1>
      </div>
      <p className="text-sm lg:text:base">
        Experience seamless growth in three steps — share your goals, get your
        personalized plan, and grow with intelligent AI guidance.
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`px-4 py-2 rounded-md w-32 md:w-48  ${
              activeStep === step.id
                ? "bg-btn text-white"
                : "bg-white text-primary"
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
      <HowBox steps={steps} activeStep={activeStep} />
      <div>
        <Button label={"View more"} />
      </div>
    </div>
  );
};

export default HowPage;
