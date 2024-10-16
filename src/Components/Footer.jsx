import React, { useState } from "react";

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const possible = [
    {
      title: "Contact us",
      subtitle:
        "Let's talk about how mParticle can get your business ready to scale. Fast.",
    },
    {
      title: "Get a demo",
      subtitle:
        "See how mParticle can help you do more with your customer data.",
    },
  ];

  const footer = [
    {
      title: "Platform",
      items: [
        "Overview",
        "Real-time data infrastructure",
        "Customer 360",
        "Segmentation",
        "Analytics",
        "Artificial intelligence",
        "Governance",
        "Integrations",
        "Pricing",
      ],
    },
    {
      title: "Use Cases",
      items: [
        "Create a customer 360",
        "Improve understanding of customers",
        "Lower customer acquisition cost",
        "Boost customer lifetime value",
        "Drive operational efficiencies",
        "Activate customer data from your warehouse",
      ],
    },
    {
      title: "Industries",
      items: [
        "Media & entertainment",
        "QSR",
        "Retail",
        "Travel & hospitality",
        "Financial services",
      ],
    },
    {
      title: "Resources",
      items: ["mParticle blog", "Resources", "Developer docs"],
    },
    {
      title: "Get Started",
      items: ["Contact sales", "Request pricing", "Request demo"],
    },
    {
      title: "Company",
      items: [
        "About",
        "Careers",
        "Partners",
        "Contact us",
        "Security",
        "Customer",
        "Brand assets",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setIcon(!icon);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <footer className="text-white px-6 md:p-12 md:pb-6 pt-10 selection:text-primaryColor">
      <h3 className="text-xl">See what's possible with us</h3>
      <div className="mt-8">
        <div className="md:flex md:gap-10">
          {possible.map((item, index) => {
            return (
              <div
                key={index}
                className="border-[.5px] p-6 mb-8 flex flex-col md:basis-1/2">
                <h4 className="text-lg mb-2">{item.title}</h4>
                <p className="mb-14">{item.subtitle}</p>
                <i className="fa-solid fa-arrow-right place-self-end"></i>
              </div>
            );
          })}
        </div>

        <div className="footer-accordion border-t-[.5px]">
          {footer.map((section, index) => (
            <div key={index} className="border-b-[.5px] pb-2 duration-300">
              <div
                onClick={() => toggleAccordion(index)}
                className="text-lg cursor-pointer focus:outline-none flex items-center justify-between
                 py-3 w-full text-left">
                <p>{section.title}</p>
                {openIndex === index ? (
                  <i className="fa-solid fa-minus"></i>
                ) : (
                  <i className="fa-solid fa-plus"></i>
                )}
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <ul className="mt-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm pb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h1 className="my-10 text-2xl font-bold">mParticle</h1>
        <div className="copy flex flex-wrap opacity-[50%]">
          <p>&copy; 2024 mParticle, Inc.</p>
          <p>Privacy Policy</p>
          <p>Cookie policy</p>
          <p>Website terms of service</p>
          <p>Platform terms of service</p>
          <p>Do not sell or share my personal data</p>
        </div>

        <p className="text-center pb-6">
          Developed by{" "}
          <a
            href="https://ferrazi.netlify.app"
            target="blank_"
            className="text-secondaryColor underline">
            Dolapo Oyesola
          </a>
        </p>
      </div>
    </footer>
  );
}
