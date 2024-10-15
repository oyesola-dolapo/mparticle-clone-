import React, { useEffect, useState } from "react";

export default function Nav() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-primaryColor z-50 px-6 absolute top-0 left-0 py-[1.8rem]  ${
        menu ? "h-screen bg-white text-black" : "h-max"
      } ${navbarBg ? "bg-white" : "bg-transparent text-white"}`}>
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-lg sm:text-xl select-none">mParticle</h1>
        <div className="flex items-center gap-6">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-bars text-xl" onClick={handleMenu}></i>
        </div>
      </div>
    </nav>
  );
}
