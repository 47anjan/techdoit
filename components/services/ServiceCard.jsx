import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  return (
    <article className="border group flex overflow-hidden items-end rounded border-slate-dark/15 p-10 h-[340px] relative isolate">
      <div className="flex w-full flex-col items-center justify-center">
        <div>
          <service.icon className="text-purple mb-7 text-4xl" />
        </div>
        <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
        <p className="max-w-[272px] leading-normal text-slate-gray text-center">
          Since 1985 Reed has pioneered cialist recruitment, sourcing
        </p>
      </div>

      <div className="absolute inset-0 isolate">
        <div className="absolute z-10 inset-0 blur-sm bg-[url('/service.jpeg')] bg-no-repeat bg-cover opacity-0  group-hover:opacity-100 duration-500 transition-all"></div>

        <div className="absolute inset-[15px] translate-y-1/2 opacity-0 will-change-transform group-hover:translate-y-0 group-hover:opacity-100 duration-500 transition-all flex-col items-center justify-center flex z-20 bg-purple/80 rounded">
          <div>
            <service.icon className="text-lime mb-4 text-white text-4xl" />
          </div>
          <h4 className="text-2xl text-white font-semibold mb-2">
            {service.title}
          </h4>
          <p className="max-w-[272px] leading-normal text-white/70 text-center mb-4">
            Since 1985 Reed has pioneered cialist recruitment, sourcing
          </p>
          <Link
            href={`/services/${service.id}`}
            className="size-[60px] bg-white rounded-full text-black text-lg grid place-content-center hover:bg-blue-500 hover:text-white duration-300 transition-colors"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ServiceCard;
