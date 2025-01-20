import { IoMdTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="max-w-container mx-auto px-container">
        <div className="py-14 flex-col lg:flex-row border-b flex items-center justify-between gap-5 border-[#213058]">
          <h3 className="text-[28px] mx-auto lg:mx-0 text-center lg:text-start max-w-[340px]">
            Get notified about the event! Subscribe today
          </h3>

          <form className=" w-full flex-1 max-w-[570px]   py-2 px-2 rounded-md bg-charcoal-blue  flex  ">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="bg-transparent text-[15px] font-rubik placeholder:text-[#D2D5DD] w-full  text-[#D2D5DD] focus:outline-none px-4  border-0 focus:ring-0  py-0"
            />

            <button className="group h-12 md:h-[50px] hover:bg-blue-500 flex items-center justify-center py-4 px-8 bg-purple rounded-xl font-semibold  transition-all will-change-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] mx-auto md:mx-0">
              <span className="flex text-nowrap items-center gap-2 ">
                <MdEmail className="text-2xl" /> Subscribe
              </span>
            </button>
          </form>
        </div>

        <div className="pt-14   text-[#CDD0DA] pb-20 grid md:grid-cols-2  lg:grid-cols-3 gap-10 border-b border-[#213058] xl:gap-0 xl:grid-cols-4 xl:justify-items-center ">
          <div>
            <Link className="text-2xl mb-7 block text-white font-bold" href="/">
              Techdoit
            </Link>
            <p className="text-lg  max-w-[252px]  mb-7">
              Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed
              diam nonu mmy nibh euis
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="#"
                className="size-[38px] grid place-content-center rounded-full bg-[#213058] text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="size-[38px] grid place-content-center rounded-full bg-[#213058] text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="size-[38px] grid place-content-center rounded-full bg-[#213058] text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="#"
                className="size-[38px] grid place-content-center rounded-full bg-[#213058] text-sky-blue hover:bg-blue-500 hover:text-white  transition-all duration-500"
              >
                <FaPinterest />
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-xl text-white  font-bold  mb-7">
              Usefull Links
            </h5>
            <ul className="flex text-[15px] font-rubik flex-col gap-4">
              <li>
                <Link
                  className="hover:text-white duration-500 transition-all"
                  href="/about"
                >
                  About{" "}
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="hover:text-white duration-500 transition-all"
                  href="/contact"
                >
                  Contact Team
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="hover:text-white duration-500 transition-all"
                  href="/news"
                >
                  News & Media
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="hover:text-white duration-500 transition-all"
                  href="/projects"
                >
                  Our Projects
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="hover:text-white duration-500 transition-all"
                  href="/contact"
                >
                  Contact
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl text-white font-bold  mb-7">Latest News</h5>
            <div className="flex  flex-col gap-6">
              <Link
                className="flex items-center gap-5 "
                href="/blog/how-to-optimise-and-webinar-to-earn-leads"
              >
                <Image
                  width={70}
                  height={70}
                  className="size-[70px] object-cover rounded-md"
                  alt="blog"
                  src="/projects/project1.webp"
                />
                <div className="flex text-sm flex-col gap-2">
                  <p className="text-ash max-w-[200px] line-clamp-2">
                    Cras quis tempus diam. In vel orci id sem pretium comm wants
                    to have{" "}
                  </p>
                  <div className="flex items-center gap-2">
                    <IoMdTime className="text-blue text-lg" />
                    <div className="line-clamp-1">02 Feb, 2024</div>
                  </div>
                </div>
              </Link>
              <Link
                className="flex items-center gap-5 "
                href="/blog/how-to-optimise-and-webinar-to-earn-leads"
              >
                <Image
                  width={70}
                  height={70}
                  className="size-[70px] object-cover rounded-md"
                  alt="blog"
                  src="/projects/project1.webp"
                />
                <div className="flex text-sm flex-col gap-2">
                  <p className="text-ash max-w-[200px] line-clamp-2">
                    Cras quis tempus diam. In vel orci id sem pretium comm wants
                    to have{" "}
                  </p>
                  <div className="flex items-center gap-2">
                    <IoMdTime className="text-blue text-lg" />
                    <div className="line-clamp-1">02 Feb, 2024</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <h5 className="text-xl text-white font-bold  mb-7">Contact Us</h5>
            <div>
              <div>
                2416 Mapleview Drive <br />
                Tampa, FL 33634
              </div>
              <div className="border-y py-5 my-5 border-[#213058]">
                +000 2324 39493
              </div>
              <div>contact@website.com</div>
            </div>
          </div>
        </div>
        <div className="pt-6 text-[#CDD0DA] flex-col sm:flex-row flex items-center gap-5 justify-between pb-8">
          <span>© Techdoit 2024 | All Rights Reserved</span>
          <div className="flex items-center divide-x-2 divide-[#CDD0DA]">
            <Link className="px-4" href="/">
              Privacy
            </Link>
            <Link className="px-4" href="/">
              Terms
            </Link>
            <Link className="px-4" href="/">
              Sitemap
            </Link>
            <Link className="px-4" href="/">
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
