import React from "react";

export default function Nav() {
  return (
    <nav className="w-full px-6 text-white  py-[1.8rem] flex justify-between">
      <div className="">
        <h1 className="font-bold">mParticle</h1>
      </div>

      <div className="flex items-center gap-4">
        <i class="fa-solid fa-magnifying-glass"></i>
        <div className="w-[20px] h-[14px] flex flex-col justify-between">
          <div className="w-full h-[2px] bg-white"></div>
          <div className="w-full h-[2px] bg-white"></div>
          <div className="w-full h-[2px] bg-white"></div>
        </div>
      </div>
    </nav>
  );
}
