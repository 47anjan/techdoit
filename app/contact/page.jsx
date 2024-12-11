import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";

const ContactPage = () => {
  return (
    <>
      <section>
        <PageBanner heading={"Contact Us"} subHeading={"contact"} />

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <div className="grid gap-20  lg:grid-cols-2 mb-20 md:mb-24">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.967410377096!2d-111.89998968453055!3d33.31966746342457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE5JzEwLjgiTiAxMTHCsDUzJzUyLjEiVw!5e0!3m2!1sen!2sus!4v1516690469899"
                width="600"
                height="470"
                className=" w-full h-[520px] rounded-2xl"
                style={{ border: 0 }}
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <div className="mb-9">
                <h2
                  data-aos="fade-up"
                  className="text-dark mb-6 text-4xl md:text-5xl font-bold font-space_grotesk"
                >
                  Let’s Get in Touch
                </h2>
                <p className="leading-loose text-dim-gray ">
                  A vast majority of the app marketers mainly concent
                  post-launch app marketing techniques and measures while
                  completely missing pre-launch campaign. This prevents the
                </p>
              </div>
              <div>
                <h5 className="text-blue font-bold font-space_grotesk text-2xl mb-6">
                  Contact Info
                </h5>
                <div className="mb-9 flex flex-col gap-5">
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">
                      Address
                    </h6>
                    <div className="text-dim-gray">
                      254, North City, Blex Center, New York
                    </div>
                  </div>

                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Phone</h6>
                    <div className="text-dim-gray">
                      09 (354) 587 874 or 10 (698) 852 741
                    </div>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Email</h6>
                    <div className="text-dim-gray">
                      info@example.com or info@example.com
                    </div>
                  </div>
                </div>

                <Link
                  target="_blank"
                  className="text-lg font-bold text-blue-500 tracking-[6px] hover:underline"
                  href="/"
                >
                  www.techdoit.com
                </Link>
              </div>
            </div>
          </div>

          <form className="bg-sky py-10 p-5  sm:p-10 md:p-16 xl:p-[75px] rounded-2xl">
            <header className="mb-10">
              <h3
                data-aos="fade-up"
                className="text-dark mb-2 text-3xl sm:text-4xl font-bold font-space_grotesk"
              >
                Contact With Us
              </h3>
              <p data-aos="fade-up" className="text-sm text-dim-gray ">
                Your email address will not be published. Required fields are
                marked *
              </p>
            </header>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  required
                  type="text"
                  placeholder="Your Name*"
                  className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email*"
                  className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
                />
              </div>
              <input
                required
                type="text"
                placeholder="Your Website*"
                className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
              />
              <textarea
                required
                placeholder="Write Message*"
                className="bg-white text-dim-gray w-full focus-visible:outline-blue-500 h-36 placeholder:text-dim-gray rounded-2xl  py-4 sm:py-5 px-6 sm:px-8"
              />
              <button className=" w-full bg-blue-500 text-white  group  lg:w-fit   h-[50px] flex items-center justify-center py-4 px-6 sm:px-8 border-2 border-blue-500 hover:bg-white hover:border-white hover:text-navy-blue duration-500 transition-all rounded-xl leading-none font-semibold gap-8">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
