import React, { useRef, useEffect, useState } from "react";

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.firstChild.offsetWidth;
    const index = Math.round(scrollPosition / itemWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white py-10 border-b-[.1px] border-primaryColor">
      <h1 className="headers">
        Solutions you can <br /> rely on
      </h1>
      <div
        className="w-full flex overflow-scroll gap-6 mt-6 snap-x snap-mandatory"
        ref={scrollContainerRef}>
        {solutions.map((item) => {
          return (
            <a
              href="#"
              className="min-w-[87%] flex flex-col justify-between snap-start">
              <div>
                <img src={item.img} alt="" className="object-cover w-full" />
                <p className="py-3 text-[1.1rem]">{item.title}</p>
                <p className="opacity-[50%] text-md mb-10">{item.subtitle}</p>
              </div>
              <a href="#" className="underline font-bold">
                {item.link.title}
              </a>
            </a>
          );
        })}
      </div>
      <div className="flex justify-between mt-6 ">
        <div className="flex justify-center mt-4">
          {solutions.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                activeIndex === index ? "bg-primaryColor" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-4">
          <button
            className="h-[3rem] w-[3rem] rounded-md bg-secondaryColor"
            disabled={activeIndex === 0}
            onClick={scrollLeft}>
            <i class="fa-solid fa-arrow-left text-black"></i>
          </button>
          <button
            className="h-[3rem] w-[3rem] rounded-md bg-secondaryColor"
            disabled={activeIndex === 3}
            onClick={scrollRight}>
            <i class="fa-solid fa-arrow-right text-black"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
