"use client";

import Image from "next/image";
import Marquee from "../ui/marquee";

const companies = [
  {
    id: 1,
    image:
      "https://psdtowpwork.com/wp/graptor/main/wp-content/uploads/2021/11/1.png",
  },
  {
    id: 2,
    image:
      "https://psdtowpwork.com/wp/graptor/main/wp-content/uploads/2021/11/2.png",
  },
  {
    id: 3,
    image:
      "https://psdtowpwork.com/wp/graptor/main/wp-content/uploads/2021/11/4.png",
  },
  {
    id: 4,
    image:
      "https://psdtowpwork.com/wp/graptor/main/wp-content/uploads/2021/11/3.png",
  },
];

const Companies = () => {
  return (
    <section className="bg-sky-blue py-20">
      <div className=" relative px-container ">
        <Marquee pauseOnHover className="[--duration:30s]">
          <div className="flex justify-evenly items-center flex-wrap">
            {companies.map((company) => (
              <Image
                key={company.id}
                className="mx-10 sm:mx-16"
                src={company.image}
                width={210}
                height={60}
                alt=""
              />
            ))}
          </div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-sky-blue z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-sky-blue z-10"></div>
      </div>
    </section>
  );
};
export default Companies;
