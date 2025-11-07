'use client'
import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from '../common/Button';
import  Accordion  from '@/components/FAQ/Accordion';

const Faq = () => {

    const accordian = useRef();

    useGSAP(() => {
      gsap.fromTo(
        accordian.current,
        { opacity: 0, y: -70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: accordian.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  return (
    <div className="lg:max-w-[75%] w-full mx-auto rounded-2xl bg-background2 p-8 lg:p-14 flex flex-col lg:flex-row gap-5">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col space-y-6">
        <button className="h-fit px-4 py-1 border bg-white rounded-md w-fit backdrop-blur-2xl text-primary shadow-lg mt-1">
          FAQ
        </button>
        <div className="text-2xl lg:text-5xl font-semibold flex flex-col space-y-2">
          <h1>Answers You Need</h1>
          <h1>Backed By AI You</h1>
          <h1>Can Trust</h1>
        </div>
        <p className="text-md text-primary">
          We’ve compiled common questions to help you understand our platform,
          our AI, and what you can expect. Got more questions? We're here to
          help.
        </p>
        <div>
          <Button label={"View more"} />
        </div>
      </div>

      {/* Right Side FAQ Accordion */}
      <div ref={accordian} className="flex-1">
        <Accordion />
      </div>
    </div>
  );
}

export default Faq