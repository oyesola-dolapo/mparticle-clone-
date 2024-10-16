import React from "react";

export default function Redefining() {
  const texts = [
    {
      text: "Real-time data infrastructure",
    },
    {
      text: "Customer 360",
    },
    {
      text: "Segmentation",
    },
    {
      text: "Analytics",
    },
    {
      text: "Artificial intelligence",
    },
    {
      text: "Governance",
    },
  ];
  return (
    <section className="bg-white py-10 md:p-12 xl:p-20 xxl:px-56 border-b-[.1px] border-primaryColor">
      <h1 className="headers md:mb-10">Redefining the CDP</h1>
      <div className="mt-8 md:flex md:gap-10 md:mt-12">
        <img
          src="./assets/images/cdp.avif"
          alt=""
          className="md:w-[55%] object-cover md:max-h-max"
        />
        <div>
          <h3 className="text-xl xl:text-2xl w-[90%] mt-4 md:mt-0">
            Our easy-to-use AI-driven platform gives you the power to do so much
            more than manage data
          </h3>

          <div>
            <div>
              {texts.map((item, index) => {
                return (
                  <p key={index} className="text-[13px] xl:text-base mt-4 mono">
                    &#10003; &nbsp;
                    {item.text}
                  </p>
                );
              })}
            </div>

            <button className="rounded-md bg-secondaryColor px-6 py-3 text-sm font-bold mt-4">
              See all capabilities
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 xl:mt-20 md:flex flex-row-reverse md:gap-10">
        <img
          src="./assets/images/daa.avif"
          alt=""
          className="md:w-[55%] md:max-h-max"
        />
        <div>
          <h3 className="text-xl xl:text-2xl w-[90%] mt-4">
            One platform, one goal: Turning customer data into customer joy.
          </h3>

          <p className="mt-4 xl:text-lg opacity-[50%]">
            Introducing the next evolution of the CDP. We're excited to announce
            the unification of indicative (now Analytics) and Vidora (now
            Cortex) into the mParticle platform. We also are thrilled to unviel
            a fresh, new brand identity and visual interface that revolutionizes
            how customers interact with the mParticle platform.{" "}
          </p>

          <button className="rounded-md bg-secondaryColor px-6 py-3 text-sm font-bold mt-4">
            Read announcement
          </button>
        </div>
      </div>
    </section>
  );
}
