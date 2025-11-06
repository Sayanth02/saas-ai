import { Clock11 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = ({ className, color, title }) => {
  return (
    <div
      className={`hidden absolute max-w-xs bg-white rounded-md shadow-lg p-4 lg:flex flex-col space-y-2 homeCard ${className}`}
    >
      <div
        className={`flex w-fit items-center justify-center p-2  rounded-md text-white ${color}`}
      >
        <Clock11 size={12} />
      </div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veniam
        voluptatibus.
      </p>
    </div>
  );
};

export default Card;
