import Image from "next/image";
import React from "react";

const FooterCard = () => {
  return (
    <div className="rounded-2xl w-full lg:w-2/6 relative">
      <Image
        src={"/images/footer.png"}
        height={300}
        width={300}
        alt="no image"
        className="w-full h-full object-cover rounded-2xl absolute"
      />
    </div>
  );
};

export default FooterCard;
