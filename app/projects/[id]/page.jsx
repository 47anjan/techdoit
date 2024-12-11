import { FaExternalLinkAlt } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import Contact from "@/components/contact/Contact";
import Companies from "@/components/companies/Companies";

const ProjectDetailsPage = () => {
  return (
    <>
      <section className="mb-20">
        <PageBanner heading={"Project Details"} subHeading={"Details"} />
        <div className="mx-auto max-w-container px-container py-20">
          <header className="mb-24 md:mb-section">
            <Image
              width={1200}
              height={560}
              alt="project title"
              className="w-full h-[420px] sm:h-[560px] object-cover rounded"
              src="/audit.jpg"
            />

            <div className="flex gap-7 flex-wrap  mt-14 items-center  bg-white justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase text-dim-gray tracking-wide font-semibold">
                  Client
                </span>
                <span className=" font-semibold  sm:text-lg max-w-48 ">
                  Microsoft Holing Ltd, Australia Area
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase text-dim-gray tracking-wide font-semibold">
                  Services
                </span>
                <span className=" font-semibold  sm:text-lg max-w-48 ">
                  Design, Branding, App, Development
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase text-dim-gray tracking-wide font-semibold">
                  Project Date
                </span>
                <span className=" font-semibold  sm:text-lg max-w-48 ">
                  February 23th, 2024 Release Started
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase text-dim-gray tracking-wide font-semibold">
                  Website
                </span>
                <Link
                  href="#"
                  className="flex items-center px-7 bg-purple hover:bg-black duration-300 transition-colors font-semibold text-white rounded-full  h-10"
                >
                  See live <FaExternalLinkAlt className="ml-2" />
                </Link>
              </div>
            </div>
          </header>

          <article>
            <div className="mb-10">
              <h2 className="font-bold text-3xl leading-tight mb-6">
                Duis aute irure dolor in reprehenderit
              </h2>
              <p className="text-dim-gray">
                Posuere nibh vestibulum, velit pulvinar interdum sed in. Magnis
                netus magna urna, in tempor magna. Tortor vel vitae vel eralk
                bllam saitae minullampellentesque eget pellentesque magnis.
                Pellentesque molestie sem massa nibh suspendisse ante eget. Sit
                dolor arcscelerisque sit nibh nunc, vulputate cursus. Feugiat in
                tortor non mauris, sit. Hac adipiscing dui sit magna. Integer
                elementum et amet hac turpis. Sagittis magna nulla ut gravida
                integer pellentesque. ellentesque molestie sem massa nibh
                suspendisse ante eget
              </p>
            </div>
            <div className="mb-16 sm:mb-20">
              <h2 className="font-semibold text-3xl leading-tight mb-6">
                Overview
              </h2>
              <ul className="flex flex-col gap-2  sm:text-lg text-dim-gray list-disc list-inside mb-7">
                <li>Create & Save your notes with multi-media</li>
                <li>Complete note editor with rich text options</li>
                <li>Automatically sync in real time</li>
                <li>Web Clipper Extension</li>
              </ul>
              <p className="text-dim-gray">
                Felis morbi ut tristique pretium libero. Eget purus, enim, orci,
                quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus
                dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam
                tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu
                a.empor sed eget nibh et Ut orci, sagittis tellus dui congue.{" "}
              </p>
            </div>
            <div className="flex flex-col  lg:flex-row gap-7">
              <div className="basis-full md:basis-[460px]">
                <Image
                  width={700}
                  height={460}
                  alt="image"
                  className="h-[470px] object-cover  w-full rounded"
                  src="/about/video.jpg"
                />
              </div>
              <div className="flex-1 ">
                <Image
                  width={700}
                  height={460}
                  alt="image"
                  className="h-[470px] w-full object-cover  rounded"
                  src="/about/about.jpg"
                />
              </div>
            </div>
          </article>
        </div>
        <Contact />
        <Companies />
      </section>
    </>
  );
};
export default ProjectDetailsPage;
