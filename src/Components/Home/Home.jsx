import React from "react";
import Scroll from "./animation/Scroll";
import Solutions from "./Solutions";
import Redefining from "./Redefining";
import Latest from "./Latest";

export default function Home() {
  const do_more = [
    {
      key: "01",
      title: `Less guesswork. Better results.`,
      subTitle: `AI-powered customer insights and predictions power informed
                 decisions at scale. With a strong data foundation as your single source or 
                 truth, your data is always accurate, secure, and usable.`,
      img: "./assets/images/moveFaster.avif",
    },
    {
      key: "02",
      title: "Move faster. With less hassle.",
      subTitle: `Tailor mParticle to fit your existing tech stack. Our fully-configurable
                 platform simplifies your data and eliminates silos, so you move with greater speed
                 and accuracy. We grow and scale with you`,
      img: "./assets/images/guessWork.avif",
      style: "md:flex-row-reverse",
    },
    {
      key: "03",
      title: "Turn data into action.",
      subTitle: `Deliver personalized customer experiences at scale with mParticle's holistic platform.
                 We turn data into insights and then use our proprietary AI engine to activate that data across
                 hundreds of API-based integrations with ease.`,
      img: "./assets/images/turnData.avif",
    },
  ];

  return (
    <main>
      <section className="h-max bg-primaryColor text-white selection:text-primaryColor px-0">
        <div className="w-full pt-10 xl:pt-20 px-6 md:px-24 xl:px-32 xxl:px-80 lg:px-32">
          <h1 className="headers text-center">
            Turn customer data into customer joy
          </h1>
          <p className="text-center text-[17px] md:text-lg lg:text-xl lg:w-[70%] lg:mx-auto lg:font-light xxl:font-normal lg:my-10 my-6">
            mParticle is the choice for multi-channel consumer brands who want
            to deliver intelligent and adaptive customer experiences in the
            moments that matter, across any screen or device.
          </p>
          <div className="flex justify-center gap-6 font-bold text-sm">
            <button className="bg-secondaryColor text-black rounded-md px-6 py-3">
              <p className="md:hidden">Get a demo</p>
              <p className="hidden md:block">Explore demo</p>
            </button>

            <button className="rounded-md border-[1px] border-white px-6 py-3 hover:text-black hover:bg-white transition duration-150">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative mt-10 md:mt-20 select-none">
          <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 mx-6 md:mx-auto">
            <Scroll />
          </div>
          <img
            src="./assets/images/heroImg.avif"
            alt=""
            className="h-[50vh] md:h-[90vh] md:object-contain w-full object-cover"
          />
        </div>
      </section>

      {/* DO MORE */}
      <section className="text-black bg-white py-10 md:p-12 xl:p-20 xxl:px-56 border-b-[.5px] border-primaryColor">
        <h1 className="headers text-[38px] xl:w-[60%]">
          Do more with more of your data
        </h1>
        <div className="w-full">
          {do_more.map((item) => {
            return (
              <div
                className={`mt-10 md:flex gap-10 items-center ${item.style}`}>
                <div className="md:w-[50%]">
                  <p className="text-sm mono xl:text-xl">
                    <i class="fa-solid fa-circle text-secondaryColor"></i>{" "}
                    {item.key}
                  </p>
                  <h4 className="text-[22px] mt-4 xl:text-4xl xl:w-1/2">{item.title}</h4>
                  <p className="opacity-[60%] mt-3 xl:text-xl">{item.subTitle}</p>
                </div>
                <img
                  src={item.img}
                  alt=""
                  className="mt-6 md:w-[50%] select-none"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* CUSTOMER STORY */}
      {/* <CustomerStory /> */}

      {/* SOLUTIONS SECTION */}
      <Solutions />

      {/* REDEFINING SECTION */}
      <Redefining />

      {/* LATEST SECTION */}
      <Latest />
    </main>
  );
}
