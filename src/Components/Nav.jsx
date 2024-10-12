import React, { useEffect, useState } from "react";

export default function Nav() {
  const [navbarBg, setNavbarBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full px-6  select-none py-[1.8rem] flex justify-between ${
        navbarBg ? "bg-white text-primaryColor" : "bg-transparent text-white"
      }`}>
      <div className="">
        <h1 className="font-bold text-lg sm:text-xl">mParticle</h1>
      </div>

      <div className="flex items-center gap-4">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bars text-xl"></i>
      </div>
    </nav>
  );
}
