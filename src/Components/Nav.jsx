import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [menu, setMenu] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 0 && !menu) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const handleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = menu ? "auto" : "hidden";
  };

  const handleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    // document.body.style.overflow =
    //   openSubMenuIndex !== null ? "auto" : "hidden";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  const nav = [
    {
      title: "Platform",
      subtitle: "Capabilities",
      items: [
        {
          title: "Real-time data infrastructure",
          subtitle: "Orchestrate end-to-end data seamlessly",
        },
        {
          title: "Analytics",
          subtitle: "Understand customer journeys & behavior",
        },
        {
          title: "Customer 360",
          subtitle: "Unifying data for a complete customer view",
        },
        {
          title: "Artificial intelligence",
          subtitle: "Optimize customer engagement at scale",
        },
        {
          title: "Segmentation",
          subtitle: "Deliver personalized experiences in real time",
        },
        {
          title: "Governance",
          subtitle: "Trust your data is secure, private and usable",
        },
      ],
    },
    {
      title: "Solutions",
      subtitle: "Use cases",
      items: [
        {
          title: "Create a customer 360",
        },
        {
          title: "Improve understanding of customers",
        },
        {
          title: "Lower customer acquisition cost",
        },
        {
          title: "Boost customer lifetime value",
        },
        {
          title: "Drive operational efficiencies",
        },
        {
          title: "Activate customer data from your warehouse",
        },
      ],
    },
    {
      title: "Resources",
      subtitle: "Resources",
      items: [
        {
          title: "mParticle blog",
        },
        {
          title: "Resources",
        },
        {
          title: "Developer docs",
        },
      ],
    },
  ];

  return (
    <nav
      className={`w-full max-h-screen relative transition-all duration-500 ${
        menu ? "h-screen bg-white text-black" : "h-max"
      }`}>
      <div
        className={`w-full px-6 md:px-10 py-[1.8rem] flex justify-between items-center transition-all duration-300 ${
          navbarBg ? "bg-white text-black" : "bg-transparent text-white"
        }`}>
        <div className="flex gap-16 items-center">
          <h1
            className={`font-bold text-lg md:text-2xl sm:text-xl select-none ${
              menu ? "text-black" : ""
            }`}>
            mParticle
          </h1>

          <div className="hidden xl:flex gap-6 items-center">
            {nav.map((item, index) => {
              return (
                <a href="#" className="text-sm">
                  {item.title}{" "}
                  <i className="fa-solid fa-chevron-down text-sm"></i>
                </a>
              );
            })}
            <a href="#">Customer</a>
          </div>
        </div>
        <div className={`flex items-center gap-6 ${menu ? "text-black" : ""}`}>
          <i className="fa-solid md:text-xl xl:text-sm fa-magnifying-glass"></i>
          <i
            className="fa-solid fa-bars text-xl md:text-2xl cursor-pointer xl:hidden"
            onClick={handleMenu}></i>
          <div className="hidden xl:flex gap-6 items-center text-sm">
            <a href="#">Login</a>
            <a href="#">Contact us</a>
            <button className="bg-secondaryColor text-black rounded-md px-6 py-3 font-semibold text-sm">
              Explore demo
            </button>
          </div>
        </div>
      </div>

      {menu && (
        <div className="px-6 min-h-[85vh] flex flex-col overflow-auto">
          {nav.map((item, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => handleSubMenu(index)}>
                <p className="font-semibold">{item.title}</p>
                <i className="fa-solid fa-chevron-right"></i>
              </div>

              {openSubMenuIndex === index && (
                <div className="bg-white flex flex-col min-h-screen w-full absolute top-0 left-0 px-6 pt-6 pb-6 overflow-auto">
                  <div className="flex justify-between items-center">
                    <p
                      className="font-semibold"
                      onClick={() => handleSubMenu(null)}>
                      <i className="fa-solid fa-chevron-left"></i> &nbsp; Back
                    </p>
                    <i
                      className="fa-solid fa-x"
                      onClick={() => {
                        handleMenu();
                        handleSubMenu(null);
                      }}></i>
                  </div>

                  <p className="mono mt-4 text-sm font-light uppercase">
                    {item.subtitle}
                  </p>

                  <div className="mb-6">
                    {item.items.map((itm, idx) => (
                      <div
                        key={idx}
                        className="border-b-[.5px] border-black py-4">
                        <h3>{itm.title}</h3>
                        <p className="w-[60%] text-sm font-light">
                          {itm.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto text-sm">
                    <button className="w-full py-4 font-semibold text-center bg-secondaryColor rounded-md">
                      Sign up
                    </button>
                    <button className="w-full py-3 mt-4 font-semibold text-center border-[.5px] border-black hover:bg-black hover:text-white duration-200 rounded-md">
                      Contact us
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <p className="font-semibold">Customer</p>
          <div className="mt-auto text-sm">
            <button className="w-full py-4 font-semibold text-center bg-secondaryColor rounded-md">
              Sign up
            </button>
            <button className="w-full py-3 mt-4 font-semibold text-center border-[.5px] border-black hover:bg-black hover:text-white duration-200 rounded-md">
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
