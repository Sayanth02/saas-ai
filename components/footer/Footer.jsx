import React from "react";
import FooterCard from "./FooterCard";
import {
  Facebook,
  FlipHorizontal2,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const listData = [
    {
      category: "Features",
      items: [
        "Text Generated",
        "AI Video Coaching",
        "AI Character",
        "Folder Management",
        "Team Management",
      ],
    },
    {
      category: "Blogs",
      items: ["Press Releases", "Newsletter Signup", "Events", "Media Kit"],
    },
    {
      category: "Company",
      items: [
        "About TalkFusion",
        "Careers",
        "Press & Media",
        "Affiliate & Referral ",
        "Contact Us",
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook /> },
    { icon: <Instagram /> },
    { icon: <Linkedin /> },
    { icon: <Youtube /> },
  ];

  return (
    <div className="w-full rounded-2xl bg-background2 p-8 lg:p-15 flex flex-col lg:flex-row gap-6 mt-20">
      <FooterCard />
      <div className="flex-1 flex flex-col justify-between gap-5">
        <div className="flex flex-col lg:flex-row justify-around items-center space-y-8">
          {listData.map((data, index) => (
            <div key={index} className="mr-10">
              <h4 className="font-bold mb-2">{data.category}</h4>
              <ul>
                {data.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full flex gap-4">
          {socialLinks.map((link, index) => (
            <div key={index} className="mr-4">
              {link.icon}
            </div>
          ))}
        </div>

        <div className="w-full flex gap-2 lg:gap-4 text-center justify-center items-center">
          <div className="lg:p-4 p-3 rounded-2xl bg-btn flex justify-center items-center w-fit h-fit">
            <FlipHorizontal2
              size={48}
              className="text-white size-6 lg:size-12"
            />
          </div>
          <h1 className="text-3xl lg:text-7xl font-bold uppercase">Elevra</h1>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <p className="text-sm text-gray-500">
            © 2023 Elevra. All rights reserved.
          </p>
          <div className="flex  gap-4 text-sm text-gray-500">
            <p>Terms Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
