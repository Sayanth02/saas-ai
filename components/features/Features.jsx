import React from "react";
import FeatGrid from "./FeatGrid";
import Button from "../common/Button";

const Features = () => {
  return (
    <div className="w-full lg:max-w-[75%] h-full rounded-lg  flex flex-col space-y-6  mx-auto px-4 md:px-15 py-20 bg-background2 ">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <button className="h-fit px-4 py-1 border bg-white rounded-md w-fit backdrop-blur-2xl text-primary shadow-lg mt-1">
            Features
          </button>
          <div>
            <h1 className="text-2xl  md:text-4xl lg:text-5xl font-semibold flex flex-col space-y-2">
              <span>Explore Our Features</span>
              <span>Designed for You</span>
              <p className="text-sm text-primary font-normal">
                Everything You Need to Succeed
              </p>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end mt-4 lg:mt-0">
          <Button label={"View more"} />
        </div>
      </div>
      <FeatGrid />
    </div>
  );
};

export default Features;
