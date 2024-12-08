import React from "react";
import { FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full h-screen bg-violet-300">
      <div className="font-zentry text-[40vw] ">
        <h1 className="leading-none">Zentry</h1>
      </div>
      <div className="md:px-14 px-4 grid md:grid-cols-5 grid-cols-3 grid-rows-2 gap-16 md:grid-rows-1">
        <div className="col-span-1 row-span-2 md:row-span-1">
          <FaLocationArrow size={35} />
        </div>
        <div className="col-span-1 flex flex-col items-center row-span-1 gap-3">
          <p className="font-general text-center underline text-sm">Explore</p>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Home
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Prologue
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            About
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Contact
          </h4>
        </div>
        <div className="col-span-1 flex flex-col items-center row-span-1 gap-3">
          <p className="font-general text-center underline text-sm">Products</p>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Radiant
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Nexus
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Zigma
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Azul
          </h4>
        </div>
        <div className="col-span-1 flex flex-col items-center row-span-1 gap-3">
          <p className="font-general text-center underline text-sm">
            Follow Us
          </p>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Discord
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            X
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Youtube
          </h4>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Medium
          </h4>
        </div>
        <div className="col-span-1 flex flex-col items-center row-span-1 gap-3">
          <p className="font-general text-center underline text-sm">
            Resources
          </p>
          <h4 className="font-general text-center text-lg inline-block rounded px-2 py-1 hover:text-violet-300 hover:bg-black">
            Medical-kit
          </h4>
        </div>
      </div>
      <div className="text-sm px-4 md:px-7 mt-2">
        ©Zentry 2024. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
