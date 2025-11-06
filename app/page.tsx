import Image from "next/image";
import Hero from "@/components/home/Hero";
import NavBar from "@/components/common/NavBar";
import WhyUs from "@/components/why/WhyUs";
import How from "@/components/how/How";

export default function Home() {
  return (
    <div className="flex flex-col space-y-20 lg:space-y-[150px] p-6 overflow-x-hidden">
      <NavBar />
      <Hero />
      <WhyUs />
      <How/>
    </div>
  );
}
