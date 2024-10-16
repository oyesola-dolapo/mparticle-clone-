import React, { useRef, useEffect, useState } from "react";

export default function Latest() {
  const [activeIndex, setActiveIndex] = useState(0);
  const Latest = [
    {
      key: 1,
      title: "Company",
      subtitle:
        "Leading the next generation of CDP solutions: mParticle celebrates acceptance into the MACH Alliance",
      img: "./assets/images/mach.avif",
    },
    {
      key: 2,
      title: "Company",
      subtitle: "G2 recognizes mParticle for exceptional customer support",
      img: "./assets/images/g2.avif",
    },
    {
      key: 3,
      title: "Company",
      subtitle:
        "mParticle joins Elite ranks with AWS advertising and marketing technology competency",
      img: "./assets/images/aws.avif",
    },
    {
      key: 4,
      title: "Growth",
      subtitle:
        "Evaluating an Enterprise CDP? consider these five critical requirements",
      img: "./assets/images/entCdp.avif",
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
    <section className="bg-white py-10 md:p-12 border-b-[.1px] border-primaryColor">
      <h1 className="text-2xl md:text-3xl">Latest from mParticle</h1>
      <div
        className="max-w-full flex overflow-scroll gap-6 mt-6 snap-x snap-mandatory"
        ref={scrollContainerRef}>
        {Latest.map((item) => {
          return (
            <a
              href="#"
              className="min-w-[87%] md:min-w-[40%] flex flex-col justify-between snap-center">
              <div>
                <img src={item.img} alt="" className="object-cover w-full" />
                <p className="py-3 mono text-sm font-light">{item.title}</p>
                <p className="text-md">{item.subtitle}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="flex justify-between mt-10 ">
        <div className="flex justify-center mt-4">
          {Latest.map((_, index) => (
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
            className="h-[3rem] w-[3rem] rounded-md bg-secondaryColor disabled:opacity-[40%]"
            disabled={activeIndex === 0}
            onClick={scrollLeft}>
            <i class="fa-solid fa-arrow-left text-black"></i>
          </button>
          <button
            className="h-[3rem] w-[3rem] rounded-md bg-secondaryColor disabled:opacity-[40%]"
            disabled={activeIndex === Latest.length - 1}
            onClick={scrollRight}>
            <i class="fa-solid fa-arrow-right text-black"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
