"use client";
import React, { useRef } from "react";
import PricingCard from "./PriceCard";
import {
  MessageSquare,
  Zap,
  Clock,
  User,
  Sun,
  Users,
  Bookmark,
  Moon,
  ChevronsUp,
  Brush,
  Code,
  Activity,
  Shield,
  Sparkle,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../common/Button";
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const priceContainer = useRef();
  const priceData = [
    {
      plan: "Starter",
      price: "$0",
      features: [
        { icon: <MessageSquare />, text: "50 AI messages/month" },
        { icon: <Zap />, text: "Basic AI model access" },
        { icon: <Clock />, text: "7-day chat history" },
        { icon: <User />, text: "Single user" },
        { icon: <Sun />, text: "Light theme support" },
        { icon: <Users />, text: "Community support" },
      ],
    },
    {
      plan: "Pro",
      price: "$15",
      features: [
        { icon: <MessageSquare />, text: "1,000 AI messages/month" },
        { icon: <Zap />, text: "Access to advanced AI models" },
        { icon: <Clock />, text: "Unlimited chat history" },
        { icon: <Bookmark />, text: "Save & pin conversations" },
        { icon: <Moon />, text: "Dark mode" },
        { icon: <ChevronsUp />, text: "Faster AI response speed" },
      ],
    },
    {
      plan: "Business",
      price: "$49",
      features: [
        { icon: <MessageSquare />, text: "5,000 AI messages/month" },
        { icon: <Users />, text: "Team management (up to 5)" },
        { icon: <Shield />, text: "Assign roles and permissions" },
        { icon: <Activity />, text: "Team activity insights" },
        { icon: <Code />, text: "API access for integration" },
        { icon: <Brush />, text: "Custom branding options" },
      ],
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: priceContainer.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".priceCard",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    },
    { scope: priceContainer }
  );

  return (
    <div
      ref={priceContainer}
      className="lg:max-w-[75%] w-full rounded-2xl bg-background2 flex flex-col space-y-5 mx-auto px-8 py-8 md:px-10 md:py-20"
    >
      <div className="flex flex-col space-y-2 items-center mb-5">
        <button className="px-4 bg-white text-primary backdrop-blur-2xl rounded-md shadow-lg w-fit ">
          Pricing
        </button>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
          Plans That Grow With You
        </h1>
        <p className="text-sm text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          reprehenderit eum ipsam, corporis minima{" "}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-8">
        {priceData.map((priceData, index) => {
          return <PricingCard key={index} data={priceData} />;
        })}
      </div>
      <div className="w-full rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-5">
          {/* Left: Title + Description */}
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              <Sparkle color="#8baf08" size={18} />
              Enterprise
            </p>
            <p className="text-sm text-gray-600">
              Get tailor-made solutions and premium support designed for
              large-scale needs.
            </p>
          </div>

          {/* Right: Pricing + CTA */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="font-semibold text-gray-900">
              Custom Pricing{" "}
              <span className="text-xs text-primary font-medium">
                /user/month
              </span>
            </p>
           <Button label={"Let's get Started"}  />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 mb-4" />

        {/* Features Section */}
        <div>
          <p className="text-sm text-primary mb-3 font-medium">
            Includes everything in{" "}
            <span className="font-semibold">Business</span> plus:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            {/* Column 1 */}
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Dedicated account manager
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                24/7 priority support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Custom AI model training
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Advanced security features
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Uptime SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Onboarding & training sessions
              </li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Dedicated infrastructure
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 color="#8baf08" size={16} />
                Regular business reviews
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
