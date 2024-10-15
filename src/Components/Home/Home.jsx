import React from "react";
import Scroll from "./animation/Scroll";
import CustomerStory from "./CustomerStory";
import Solutions from "./Solutions";
import Redefining from "./Redefining";
import Latest from "./Latest";

export default function Home() {
  const do_more = [
    {
      key: "01",
      title: "Less guesswork. Better results.",
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
    },
    {
      key: "01",
      title: "Turn data into action.",
      subTitle: `Deliver personalized customer experiences at scale with mParticle's holistic platform.
      We turn data into insights and then use our proprietary AI engine to activate that data across
      hundreds of API-based integrations with ease.`,
      img: "./assets/images/turnData.avif",
    },
  ];

  return (
    <main>
      <section className="h-max w-screen bg-primaryColor text-white selection:text-primaryColor px-0">
        <div className="w-full pt-8 px-6">
          <h1 className="headers text-center">
            Turn customer data into customer joy
          </h1>
          <p className="text-center text-[17px] my-6">
            mParticle is the choice for multi-channel consumer brands who want
            to deliver intelligent and adaptive customer experiences in the
            moments that matter, across any screen or device.
          </p>
          <div className="flex justify-center gap-6 font-bold text-sm">
            <button className="bg-secondaryColor text-black rounded-md px-6 py-3">
              Get a demo
            </button>

            <button className="rounded-md border-[1px] border-white px-6 py-3 hover:text-black hover:bg-white transition duration-150">
              Contact Us
            </button>
          </div>
        </div>

        <div className="h-[50vh] w-screen relative mt-10">
          <div className="absolute top-0 left-0 mx-6">
            <Scroll />
          </div>
          <img
            src="./assets/images/heroImg.avif"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* DO MORE */}
      <section className="text-black bg-white py-10 border-b-[.5px] border-primaryColor">
        <h1 className="headers text-[38px]">Do more with more of your data</h1>
        <div className="">
          {do_more.map((item) => {
            return (
              <div className="mt-10">
                <p className="text-sm mono">
                  <i class="fa-solid fa-circle text-secondaryColor"></i>{" "}
                  {item.key}
                </p>
                <h4 className="text-[22px] mt-4">{item.title}</h4>
                <p className="opacity-[60%] mt-3">{item.subTitle}</p>
                <img src={item.img} alt="" className="mt-6" />
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
