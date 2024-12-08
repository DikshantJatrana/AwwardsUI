import React, { useRef, useEffect } from "react";
import Button from "./Button";
import { FaSquare } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function WordsSection() {
  const WordsRef = useRef(null);

  useEffect(() => {
    if (!WordsRef.current) return;

    gsap.set("#WordsSection-h1", {
      transform:
        "perspective(1000px) translate3d(-122.07px, 51.303px, -20.4769px) rotate(0.0004deg) rotateY(-60deg) rotateX(-20deg)",
      opacity: 0,
    });
    gsap.to("#WordsSection-h1", {
      opacity: 1,
      transform:
        "perspective(1000px) translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#WordsSection-h1",
        start: "center bottom",
        end: "center bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.set("#WordsSection", {
      backgroundColor: "#000000",
      color: "#dfdff2",
    });
    gsap.to("#WordsSection", {
      backgroundColor: "#dfdff2",
      color: "#000000",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#WordsSection",
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.set("#Story", {
      backgroundColor: "#000000",
      color: "#dfdff2",
    });
    gsap.to("#Story", {
      backgroundColor: "#dfdff2",
      color: "#000000",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#WordsSection",
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to("#Words-section-btn", {
      backgroundColor: "#000000",
      color: "#ffffff",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#WordsSection",
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    ScrollTrigger.refresh();
    gsap.to("#realm-btn", {
      backgroundColor: "#000000",
      color: "#ffffff",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#WordsSection",
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
    ScrollTrigger.refresh();
  }, [WordsRef]);

  useGSAP(() => {
    gsap.set("#Who-are-we span", {
      scale: 0,
      opacity: 0,
    });

    gsap.to("#Who-are-we span", {
      scale: 1,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
      delay: 0.5,
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#WordsSection",
        start: "6% bottom bottom",
        end: "6% bottom bottom",
        scrub: 1,
      },
    });
  });

  return (
    <section
      id="WordsSection"
      className="h-screen w-full bg-black text-blue-75 flex flex-col items-center justify-center"
    >
      <div className="w-full text-center">
        <h4
          id="Who-are-we"
          className="font-general text-[8px] uppercase mb-2 md:text-[10px] lg:text-[12px]"
        >
          <span className="inline-block mr-3">WHO</span>
          <span className="inline-block mr-3">ARE</span>
          <span className="inline-block mr-3">WE</span>
        </h4>
        <div
          ref={WordsRef}
          id="WordsSection-h1"
          className="font-zentry animated-word special-font text-5xl md:text-7xl"
        >
          <h1>We're building</h1>
          <h1>
            a new{" "}
            <span className="relative mx-5">
              <FaSquare className="inline text-3xl hover:scale-125 ease-in duration-75  cursor-pointer md:text-4xl" />{" "}
              <img
                src="img/gallery-5.webp"
                alt="photo1"
                className="h-16 w-25 object-center object-fit absolute opacity-0 hover:opacity-100 hover:scale-x-[5] hover:scale-y-[2.5] transition-all ease-in delay-75 duration-300 cursor-pointer rounded-md top-0 left-0"
              />
            </span>
            reality
          </h1>
          <h1>that rewards</h1>
          <h1>
            players{" "}
            <span className="relative mx-5">
              <FaSquare className="inline text-3xl hover:scale-125 ease-in duration-75  cursor-pointer md:text-4xl" />{" "}
              <img
                src="img/contact-2.webp"
                alt="photo1"
                className="h-16 w-25 object-center object-fit absolute opacity-0 hover:opacity-100 hover:scale-x-[5] hover:scale-y-[2.5] transition-all ease-in delay-75 duration-300 cursor-pointer rounded-md top-0 left-0"
              />
            </span>{" "}
            and
          </h1>
          <h1>encourages</h1>
          <h1>communities</h1>
          <h1>
            to{" "}
            <span className="relative mx-5">
              <FaSquare className="inline text-3xl hover:scale-125 ease-in duration-75  cursor-pointer md:text-4xl" />{" "}
              <img
                src="img/swordman.webp"
                alt="photo1"
                className="h-25 w-25 object-center object-fit absolute opacity-0 hover:opacity-100 hover:scale-x-[4] hover:scale-y-[4] transition-all ease-in delay-75 duration-300 cursor-pointer rounded-md top-0 left-0"
              />
            </span>{" "}
            thrive
          </h1>
        </div>
      </div>
      <div className="mt-7 max-w-[75%] font-general flex flex-col text-center items-center justify-center text-sm md:text-[10px]">
        <p className="mb-5">
          Zentry is on a mission to unite diverse player networks to <br />
          forge the world's largest shared adventure.
        </p>
        <Button
          id={"Words-section-btn"}
          title={"DISCOVER WHO WE ARE"}
          containerClass={""}
        />
      </div>
    </section>
  );
}

export default WordsSection;
