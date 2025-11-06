import Hero from "@/components/home/Hero";
import NavBar from "@/components/common/NavBar";
import WhyUs from "@/components/why/WhyUs";
import How from "@/components/how/How";
import TrustUs from "@/components/trust/TrustUs";
import Features from '@/components/features/Features'
import Pricing from '@/components/pricing/Pricing'

export default function Home() {
  return (
    <div className="flex flex-col space-y-20 lg:space-y-[150px] p-6 overflow-x-hidden">
      <NavBar />
      <Hero />
      <TrustUs/>
      <WhyUs />
      <How/>
      <Features/>
      <Pricing/>
    </div>
  );
}
