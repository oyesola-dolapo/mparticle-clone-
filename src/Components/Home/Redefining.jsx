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
    <section className="bg-white py-10 border-b-[.1px] border-primaryColor">
      <h1 className="headers">Redefining the CDP</h1>
      <div className="mt-8">
        <img src="./assets/images/cdp.avif" alt="" />
        <div>
          <h3 className="text-xl w-[90%] mt-4">
            Our easy-to-use AI-driven platform gives you the power to do so much
            more than manage data
          </h3>

          <div>
            {texts.map((item, index) => {
              return (
                <p key={index} className="text-[13px] mt-4 mono">
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
      <div className="mt-8">
        <img src="./assets/images/daa.avif" alt="" />
        <div>
          <h3 className="text-xl w-[90%] mt-4">
            One platform, one goal: Turning customer data into customer joy.
          </h3>

          <p className="mt-4 opacity-[50%]">
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
