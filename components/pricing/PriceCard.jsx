"use client";
import React, { useState } from "react";
import { Layers } from "lucide-react";
import Button from "../common/Button";

const PriceCard = ({ data }) => {
  return (
    <div
      className={` flex-1 w-full rounded-2xl shadow-md priceCard  p-1 ${
        data.plan === "Pro" ? "bg-btn" : "bg-white"
      }`}
    >
      <p
        className={`text-center  font-bold text-white m-2 ${
          data.plan === "Pro" ? "block" : "hidden"
        }`}
      >
        Most Recommended
      </p>
      <div className={`bg-white rounded-2xl flex flex-col space-y-4 p-5 `}>
        <div className="flex flex-col space-y-2">
          <div className="flex gap-2">
            <Layers />
            <span className="text-md font-semibold">{data.plan}</span>
          </div>
          <p className="text-sm text-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempora voluptatum quibusdam quos, animi
          </p>
        </div>
        <div className="flex flex-col space-y-3 ">
          <p className="text-5xl font-bold">
            {data.price}
            <span className="text-sm text-primary font-normal ms-2">
              /user/month
            </span>
          </p>
          <Button label={"Let's Get Started"} />
        </div>
        <div className="text-primary">
          <p className="mb-3">Starter Includes :</p>
          <ul className="flex flex-col space-y-2 text-sm ">
            {data.features.map((feat, index) => (
              <li className="flex gap-2" key={index}>
                {feat.icon} {feat.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
