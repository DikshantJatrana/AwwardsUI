import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function AnimatedWords({ title, containerClass }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(".animated-word", {
      transform:
        "perspective(1000px) translate3d(-122.07px, 51.303px, -20.4769px) rotate(0.0004deg) rotateY(-60deg) rotateX(-20deg)",
      opacity: 0,
    });
    gsap.to(".animated-word", {
      opacity: 1,
      transform:
        "perspective(1000px) translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
      ease: "power2.inOut",
      stagger: 0.02,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  }, [containerRef]);

  return (
    <div>
      <div
        ref={containerRef}
        className={`special-font font-zentry font-black text-4xl md:text-6xl lg:text-7xl ${containerClass}`}
      >
        {title.split("<br />").map((line, index) => (
          <div
            key={index}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(" ").map((word, i) => (
              <span
                key={i}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedWords;
