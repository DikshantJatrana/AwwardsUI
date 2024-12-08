import React, { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export const BentoTilt = ({ children, className }) => {
  const [transformValue, setTransfrom] = useState("");
  const bentoRef = useRef();

  const handleMouseMove = (e) => {
    if (!bentoRef.current) return;

    const { left, top, width, height } =
      bentoRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 7;
    const tiltY = (relativeX - 0.5) * -7;

    const NewTransfrom = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransfrom(NewTransfrom);
  };

  const handleMoveLeave = () => {
    setTransfrom("");
  };

  return (
    <div
      ref={bentoRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMoveLeave}
      className={className}
      style={{ transform: transformValue }}
    >
      {children}
    </div>
  );
};

function BentoCard({ title, description, src }) {
  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        className="size-full absolute top-0 left-0 object-cover object-center"
        muted
        loop
        autoPlay
      ></video>
      <div className="z-20 size-full relative flex flex-col p-5 text-blue-50">
        <h1 className="special-font text-4xl md:text-6xl font-black font-zentry">
          {title}
        </h1>
        {description && (
          <p className="text-xs md:text-sm mt-3 max-w-64">{description}</p>
        )}
      </div>
      <button
        disabled
        className="absolute z-20 rounded-full flex items-center border-gray-500 border text-gray-500 px-4 py-2 text-[8px] md:text-[10px] bg-black/35 bottom-5 left-5"
      >
        <FaLocationArrow className="mr-1" />
        Coming Soon
      </button>
    </div>
  );
}

function Feature() {
  return (
    <section className="bg-black pb-52">
      <div className="mx-auto px-3 md:px-10">
        <div className="px-5 pt-72 pb-3">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web mb-4 md:mb-7 lg:mb-10 text-lg text-blue-50 opacity-50">
            Immerse Yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world
          </p>
          <BentoTilt className="border-hsla h-96 w-full md:h-[60vh] mb-7 relative rounded-md overflow-hidden">
            <BentoCard
              src="videos/feature-1.mp4"
              title={
                <>
                  radia<b>n</b>t
                </>
              }
              description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </BentoTilt>
          <div className="grid grid-cols-2 gap-7 grid-rows-3 w-full h-[135vh]">
            <BentoTilt className="relative border-hsla row-span-1 col-span-2 md:row-span-2 md:col-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <BentoCard
                src="videos/feature-2.mp4"
                title={
                  <>
                    zig<b>m</b>a
                  </>
                }
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              />
            </BentoTilt>
            <BentoTilt className="relative border-hsla row-span-1 col-span-2 md:col-span-1 ms-20 md:ms-0 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <BentoCard
                src="videos/feature-3.mp4"
                title={
                  <>
                    n<b>e</b>xus
                  </>
                }
                description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              />
            </BentoTilt>
            <BentoTilt className="relative border-hsla row-span-1 col-span-2 md:col-span-1 me-14 md:me-0 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <BentoCard
                src="videos/feature-4.mp4"
                title={
                  <>
                    az<b>u</b>l
                  </>
                }
                description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              />
            </BentoTilt>
            <BentoTilt className="relative border-hsla row-span-1 col-span-2 md:col-span-1 ms-20 md:ms-0 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <div className="bg-violet-300 size h-full relative">
                <h1 className="p-5 md:p-7 font-zentry special-font text-4xl md:text-6xl text-black max-w-[65%]">
                  M<b>O</b>RE CO<b>M</b>ING S<b>O</b>ON
                </h1>
                <FaLocationArrow className="absolute bottom-5 right-5 text-4xl md:text-6xl text-black" />
              </div>
            </BentoTilt>
            <BentoTilt className="relative border-hsla hidden md:block row-span-1 col-span-2 md:col-span-1 me-14 md:me-0 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <BentoCard
                src="videos/feature-5.mp4"
                title={
                  <>
                    az<b>u</b>l
                  </>
                }
              />
            </BentoTilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
