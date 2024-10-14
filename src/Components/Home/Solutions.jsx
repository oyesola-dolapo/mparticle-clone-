import React from "react";

export default function Solutions() {
  const solutions = [
    {
      key: 1,
      title: "Create a unified customer view",
      subtitle:
        "understand your customer through a single, comprehensive lens. Clean, unified data gives you one source of truth that you can share across teams.",
      img: "./assets/images/unifiedView.avif",
      link: {
        title: "Unified view",
      },
    },
    {
      key: 2,
      title: "Grow lifetime value",
      subtitle:
        "Accelerate revenue per customer with multi-channel audience activation, churn prevention, loyalty and engagement enhancement, uplift/increment testing, improved ad targeting, and implementing next best action decisions. ",
      img: "./assets/images/growValue.avif",
      link: {
        title: "Grow value",
      },
    },
    {
      key: 3,
      title: "Understand customer journeys",
      subtitle:
        "AI-driven predictions and analytics unlock game-changing insights to drive more engaging, personalized, cross channel experiences.",
      img: "./assets/images/understandJourneys.avif",
      link: {
        title: "Understand journeys",
      },
    },
    {
      key: 4,
      title: "Lower acquisition costs",
      subtitle:
        "Use first-party data to grow your customer base for less. Use real-time suppression, leverage lookalike models, personalize content, and test your marketing efforts, all in one platform.",
      img: "./assets/images/lowerCost.avif",
      link: {
        title: "Lower costs",
      },
    },
  ];
  return (
    <section className="bg-white py-8">
      <h1 className="headers">
        Solutions you can <br /> rely on
      </h1>
      <div className="w-full flex overflow-scroll gap-6 mt-6">
        {solutions.map((item) => {
          return (
            <a
              href="#"
              className="min-w-[87%] h-[40rem] flex flex-col justify-between">
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="object-cover w-full h-[24rem]"
                />
                <p className="py-3 text-[1.1rem]">{item.title}</p>
                <p className="opacity-[50%] text-md">{item.subtitle}</p>
              </div>
              <a href="#" className="underline font-bold">
                {item.link.title}
              </a>
            </a>
          );
        })}
      </div>
      <div className="flex justify-end gap-4 mt-4">
        <button className="h-[3rem] w-[3rem] rounded-md bg-secondaryColor">
          <i class="fa-solid fa-arrow-left text-black"></i>
        </button>
        <button className="h-[3rem] w-[3rem] rounded-md bg-secondaryColor">
          <i class="fa-solid fa-arrow-right text-black"></i>
        </button>
      </div>
    </section>
  );
}
