"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeatGrid = () => {
  const gridContainer = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridContainer.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        //   markers: true,
        },
      });

      tl.from(".cell-1", {
        opacity: 0,
        x: -300,
        duration: 0.5,
      })
        .from(".cell-2", {
          opacity: 0,
          y: -200,
          duration: 0.5,
        })
        .from(".cell-3", {
          opacity: 0,
          x: -200,
          duration: 0.5,
        })
        .from(".cell-4", {
          opacity: 0,
          y: 200,
          duration: 0.5,
        })
        .from(".cell-5", {
          opacity: 0,
          x: 200,
          duration: 0.5,
        });
    },
    { scope: gridContainer }
  );
  return (
    <div
      ref={gridContainer}
      className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-3"
    >
      <div className="w-full py-8 px-5 bg-white lg:col-span-2 rounded-2xl cell-1">
        <div className="w-full p-5 bg-white col-span-2 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-2">AI Career Coach</h2>
          <p className="text-xs text-gray">
            Our AI Career Coach provides personalized career roadmaps, helps you
            prepare for interviews, guides you through salary negotiations, and
            keeps you informed with real-time industry insights.
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-white p-4 row-span-2 rounded-2xl overflow-hidden cell-2 flex flex-col justify-evenly">
        <h2 className="font-semibold">Network Intelligence</h2>
        <ul className="text-sm list-disc list-inside text-gray space-y-2">
          <li>Strategic connection </li>
          <li>Conversation starters</li>
          <li>Follow-up reminders</li>
          <li>Follow-up reminders</li>
          <li>Visual progress dashboards</li>
          <li>Milestone celebrations</li>
          <li>Habit formation tools</li>
          <li>Performance insights</li>
        </ul>
      </div>
      <div className="w-full h-full bg-white rounded-2xl row-span-2 overflow-hidden cell-3">
        <Image
          className="w-full h-full object-cover"
          src={"/images/stm.png"}
          width={150}
          height={150}
          alt="No image"
        />
      </div>
      <div className="w-full h-full bg-white row-span-2 rounded-2xl overflow-hidden cell-4">
        <Image
          className="w-full h-full object-cover"
          src={"/images/SDH1.png"}
          width={200}
          height={200}
          alt="No image"
        />
      </div>
      <div className="w-full bg-white rounded-2xl p-5 cell-5">
        <button className="px-2 py-2 bg-background text-xs font-semibold rounded-4xl mb-4">
          Insight Analytics
        </button>
        <p className="text-sm text-primary">
          Our Insight Analytics feature delivers AI-driven performance reports,
          tracks your skill growth, measures goal progress, and provides
          actionable recommendations to help you continuously improve.
        </p>
      </div>
    </div>
  );
};

export default FeatGrid;
