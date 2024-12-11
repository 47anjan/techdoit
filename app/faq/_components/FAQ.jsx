import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import FAQContainer from "./FAQContainer";

const FAQ = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 lg:flex-row max-w-container mx-auto px-container">
        <div className="flex-1">
          <h4
            data-aos="fade-up"
            className="text-purple uppercase font-bold mb-5 leading-none"
          >
            OUR QUESTIONS AND ANSWER
          </h4>
          <h2
            data-aos="fade-up"
            className="text-4xl sm:text-[60px] mb-14 font-bold leading-snug sm:leading-tight"
          >
            Things you need to know about us
          </h2>
          <div className="flex items-center group">
            <div className="flex items-center ">
              <Image
                width={100}
                height={100}
                alt="img"
                className="size-[60px] rounded-full object-cover "
                src="/home1/blog/blog1.webp"
              />
              <div className="border-[3px] border-white group-hover:border-lime rounded-full grid place-content-center group-hover:bg-white  duration-300 transition-colors bg-lime text-xl -translate-x-8  size-[60px]">
                <FiPhoneCall />
              </div>
            </div>
            <div className="flex -translate-x-4 flex-col gap-1">
              <span className="inline-block text-sm text-slate-gray">
                Call us at
              </span>
              <span className="inline-block font-bold">+(602) 762 472 96</span>
            </div>
          </div>
        </div>
        <div className="lg:basis-[580px]">
          <FAQContainer />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
