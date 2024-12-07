import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/all";
import AnimatedWords from "./AnimatedWords";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.set("#zentry-text span", {
      scale: 0,
      opacity: 0,
    });

    gsap.to("#zentry-text span", {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      delay: 0.5,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#about",
        start: "6% bottom bottom",
        end: "6% bottom bottom",
        scrub: 1,
      },
    });
    gsap.set("#about-img", {
      clipPath: "polygon(16% 0, 76% 4%, 82% 88%, 19% 98%)",
    });
    gsap.to("#about-img", {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      width: "100vw",
      height: "100vh",
      scrollTrigger: {
        trigger: "#about-container",
        start: "center 70% top",
        end: "center 45% top",
        scrub: 0.5,
      },
    });
  });

  return (
    <div id="about" className="relative w-full h-screen bg-blue-75 ">
      <div className="mt-28 flex flex-col items-center text-center gap-1 mb-6 text-black">
        <h4
          id="zentry-text"
          className="font-general text-[8px] uppercase mb-2 md:text-[10px] lg:text-[12px]"
        >
          <span className="inline-block mr-3">Welcome</span>
          <span className="inline-block mr-3">To</span>
          <span className="inline-block mr-3">Zentry</span>
        </h4>
        <AnimatedWords
          title={
            "Disc<b>o</b>ver the World's <br /> Largest Shared <b>A</b>dventure"
          }
          containerClass={"text-black"}
        />
        <div
          id="about-container"
          className="w-screen h-dvh pt-[2rem] z-20 relative flex justify-center bg-blue-75"
        >
          <div
            id="about-img"
            className="w-[45%] h-[75%] sm:w-[90%] sm:h-[63%] md:w-[50%] md:h-[68%] z-20 relative overflow-hidden"
          >
            <img
              src="img/README.webp"
              className="absolute top-0 left-0 size-full object-cover"
              alt="about"
            />
          </div>
          <div
            id="trigger-div"
            className="absolute top-2/3 max-w-[24rem] mt-10 text-sm md:text-[14px] font-circular-web md:max-w-[34rem]"
          >
            <h3>The Game of Games begins—your life, now an epic MMORPG</h3>
            <h3 className="text-gray-500">
              Zentry unites the every players from countless games and
              platforms, both digital and physical, into a unified Play Economy
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
