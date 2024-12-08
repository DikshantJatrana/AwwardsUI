import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Button({ title, id, leftIcon, rightIcon, containerClass }) {
  const T1Ref = useRef(null);
  const T2Ref = useRef(null);
  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    gsap.to(`#${id}`, {
      transform: "skewY(-3deg)",
      duration: 0.3,
      clipPath: "polygon(5% 0, 97% 0, 100% 90%, 3% 100%)",
      borderRadius: "2rem",
      ease: "expo.out",
    });
    gsap.to(T2Ref.current, {
      transform: "translate(0rem,-1.5rem) skewY(-1deg)",
      duration: 0.3,
      ease: "power1.in",
    });

    gsap.to(T1Ref.current, {
      transform: "translate(0rem,-3rem)",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();
    gsap.to(`#${id}`, {
      transform: "skewX(0deg)",
      borderRadius: "9999px",
      duration: 0.2,
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "expo.out",
    });
    gsap.to(T2Ref.current, {
      transform: "translate(0rem,3rem) skewY(0deg)",
      duration: 0.2,
      ease: "power1.out",
    });
    gsap.to(T1Ref.current, {
      transform: "translate(0rem,0rem)",
      duration: 0.2,
      ease: "power1.in",
    });
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={id}
      className={`group relative w-fit rounded-full uppercase overflow-hidden cursor-pointer bg-violet-50 px-5 py-2 text-black ${containerClass}`}
    >
      <div className="relative overflow-hidden">
        <span ref={T1Ref} id="t1" className=" flex justify-center items-center">
          {leftIcon} <div>{title}</div>
          {rightIcon}
        </span>
        <span
          ref={T2Ref}
          id="t2"
          className="absolute flex justify-center items-center  translate-y-[3rem]"
        >
          {leftIcon} <div>{title}</div>
          {rightIcon}
        </span>
      </div>
    </button>
  );
}

export default Button;
