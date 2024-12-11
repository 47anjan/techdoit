import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { LuBadgeCheck } from "react-icons/lu";
import { services } from "@/components/services/Services";
import PageBanner from "@/components/PageBanner/PageBanner";

const ServicesPage = () => {
  return (
    <>
      <PageBanner heading={"Our Services"} subHeading={"Services"} />
      <section className="py-20  bg-light-gray">
        <div className="max-w-container mx-auto px-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="rounded-[10px] sm:hover:scale-105 duration-500 transition-transform will-change-transform overflow-hidden"
              >
                <Link
                  href={`/services/${service.id}`}
                  className="overflow-hidden rounded-2xl"
                >
                  <div className="relative group isolate">
                    <Image
                      height={260}
                      width={370}
                      className="w-full scale-110 group-hover:scale-100 duration-500 transition-transform will-change-transform h-[420px] object-cover"
                      src={service.image}
                      alt={service.title}
                    />

                    <div className="absolute bg-gradient-to-t from-black to-transparent inset-0 flex items-end  duration-500 transition-all text-white">
                      <div className="relative z-10 p-10 w-full">
                        <div className="flex flex-col translate-y-[90%]  group-hover:translate-y-0 will-change-transform duration-500 transition-transform">
                          <h3 className="text-2xl font-semibold">
                            {service.title}
                          </h3>
                          <p className="pt-4 opacity-0 group-hover:opacity-100 duration-500 transition-opacity pb-5">
                            {service.info}
                          </p>
                          <div className="flex opacity-0 group-hover:opacity-100 duration-500  transition-opacity font-semibold items-center gap-1">
                            <span>See More</span>
                            <FaArrowRight />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-gradient-to-t from-purple text-purple to-transparent bottom-0 w-full h-0 origin-bottom duration-300 transition-all group-hover:h-[420px] "></div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center gap-2 px-container  justify-center pt-16 text-slate-gray font-medium flex-col   text-center lg:text-start lg:items-start lg:flex-row"
        >
          <LuBadgeCheck className="text-purple text-2xl" />
          IT Technology service specially built for your business.{" "}
          <Link href="/contact" className="text-purple underline font-semibold">
            Get Your Solution
          </Link>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;
