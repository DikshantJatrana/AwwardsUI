import React, { useRef, useState } from "react";
import AnimatedWords from "./AnimatedWords";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Story() {
  const FrameRef = useRef();
  const [transformValue, setTransfrom] = useState("");

  const handleMouseMove = (e) => {
    if (!FrameRef.current) return;

    const { left, top, width, height } =
      FrameRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 17;
    const tiltY = (relativeX - 0.5) * -17;

    const NewTransfrom = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransfrom(NewTransfrom);
  };

  const handleMouseLeave = () => {
    setTransfrom("");
  };

  useGSAP(() => {
    gsap.set("#Universal span", {
      scale: 0,
      opacity: 0,
    });

    gsap.to("#Universal span", {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      delay: 0.5,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#Story",
        start: "6% bottom bottom",
        end: "6% bottom bottom",
        scrub: 1,
      },
    });
  });

  return (
    <section id="Story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center size-full py-10 pb-24">
        <h4
          id="Universal"
          className="font-general text-[8px] uppercase mb-2 md:text-[10px] lg:text-[12px]"
        >
          <span className="inline-block mr-3">The</span>
          <span className="inline-block mr-3">Universal</span>
          <span className="inline-block mr-3">IP</span>
          <span className="inline-block mr-3">World</span>
        </h4>
        <div className="size-full relative">
          <AnimatedWords
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass={
              "mt-5 pointer-events-none mix-blend-difference relative z-10"
            }
          />

          <div className="w-full h-dvh flex flex-col md:h-[90vh] relative">
            <div
              ref={FrameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseLeave}
              onMouseUp={handleMouseLeave}
              style={{ transform: transformValue }}
              className="story-img-mask absolute size-full flex flex-col md:size-3/4 md:top-[-10%] md:left-[12.5%] filter-[url('#flt_tag')]"
            >
              <img
                src="img/entrance.webp"
                alt="entrance"
                className="size-full object-cover obeject-center"
              />
            </div>
            <div className="font-general flex flex-col text-sm md:text-[10px] right-[10%] -bottom-[10%] md:right-0 absolute md:bottom-[18%] w-[80%] md:w-[35%] text-blue-100">
              <p>
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>
              <Button
                id="realm-btn"
                title="discover prologue"
                containerClass="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
