import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [index, setIndex] = useState(1);
  const [isClickable, setIsClickable] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hasClicked, setClicked] = useState(false);
  const [isloading, setLoading] = useState(true);
  const [LoadedVideos, setLoaded] = useState(0);

  const words = ["GAMING", "IDENTITY", "REALITY", "LIFESTYLE"];

  const TotalNumberOfVideo = 4;
  const NextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoaded((perv) => perv + 1);
  };

  const handleMiniVideoPlater = () => {
    if (!isClickable) return;
    setIsClickable(false);

    setClicked(true);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setIndex((pervindex) => (pervindex % TotalNumberOfVideo) + 1);
    const visible = document.querySelector("#text2").classList.remove("hide");

    gsap.set("#text2", {
      x: 0,
      y: 0,
      scale: 1,
      transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
    });
    gsap.to("#text2", {
      x: 470,
      y: 80,
      transform:
        "perspective(1000px) translate3d(122.07px, 51.303px, 20.4769px) rotate(-0.0004deg) rotateY(60deg) rotateX(-20deg)",
      duration: 1.7,
      ease: "power1.out",
      onComplete: () => {
        setIsClickable(true);
      },
    });
  };

  useGSAP(() => {
    const spans = document.querySelectorAll("#text span");
    gsap.set(spans, { y: 0, opacity: 1 });
    if (hasClicked) {
      gsap.from(spans, {
        y: -150,
        opacity: 0.6,
        delay: 0.3,
        duration: 0.9,
        stagger: 0.05,
        ease: "power1.out",
      });
    }
  }, [currentWordIndex]);

  useGSAP(
    () => {
      gsap.to("#next-video", {
        transformOrigin: "origin origin",
        visibility: "visible",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1.2,
        delay: 0.05,
      });
      gsap.from("#current-video", {
        transformOrigin: "origin origin",
        scale: 0,
        duration: 2.2,
        ease: "power2.out",
      });
    },
    { dependencies: [index], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(22% 4%, 73% 0, 89% 86%, 5% 79%)",
      borderRadius: "0% 0% 56% 40%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.in",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.set("#miniPlayer", {
      visibility: "visible",
    });

    gsap.to("#miniPlayer", {
      visibility: "hidden",
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: 2,
      },
    });
  });

  const handleMouseEnterIntoPlayer = () => {
    gsap.to("#miniPlayer", {
      opacity: 1,
      scale: 1,
      duration: 0.55,
    });
  };

  const handleMouseOutFromPlayer = () => {
    gsap.to("#miniPlayer", {
      opacity: 0,
      scale: 0.5,
      duration: 0.35,
    });
  };

  const VideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative w-screen h-dvh z-10 overflow-hidden bg-blue-75"
      >
        <div className="mask-clip-path absolute absolute-center z-50 size-48 cursor-pointer rounded-lg overflow-hidden">
          <div
            id="miniPlayer"
            onClick={handleMiniVideoPlater}
            onMouseEnter={handleMouseEnterIntoPlayer}
            onMouseLeave={handleMouseOutFromPlayer}
            className="origin-center scale-50 opacity-0 cursor-pointer z-60"
          >
            <video
              loop
              muted
              id="current-video"
              className="origin-center size-48 object-cover object-center scale-150"
              src={VideoSrc((index % TotalNumberOfVideo) + 1)}
              ref={NextVideoRef}
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
        <video
          ref={NextVideoRef}
          src={VideoSrc(index)}
          className="absolute-center absolute invisible size-48 object-cover object-center z-20"
          muted
          id="next-video"
          loop
          autoPlay
          onLoadedData={handleVideoLoad}
        ></video>
        <video
          src={VideoSrc(index === 1 ? 4 : index - 1)}
          className="absolute object-cover object-center size-full left-0 top-0"
          muted
          loop
          onLoadedData={handleVideoLoad}
        ></video>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-[4.7rem] px-5 sm:px-10">
            <h1 className="special-font hero-heading z-20 text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              title={"Watch Trailer"}
              id={"watch-trailer"}
              leftIcon={<TiLocationArrow />}
              containerClass={"!bg-yellow-300 flex-center gap-1"}
            />
          </div>
        </div>
        <h1
          id="text"
          className="special-font hero-heading overflow-hidden absolute bottom-5 right-10 z-20 text-blue-75"
        >
          {words[currentWordIndex === 3 ? 0 : currentWordIndex + 1]
            .split("")
            .map((char, charIndex) => {
              const key = `${currentWordIndex + 1}-${charIndex}`;
              console.log("Key value:", key);
              return (
                <span className="inline-block mr-[2px]" key={key}>
                  <b>{char}</b>
                </span>
              );
            })}
        </h1>
        <h1
          id="text2"
          className="special-font hero-heading hide overflow-hidden absolute bottom-5 right-10 z-20 text-blue-75"
        >
          {words[currentWordIndex].split("").map((char, charIndex) => (
            <span
              className="inline-block mr-[2px]"
              key={`${currentWordIndex}-${charIndex}`}
            >
              <b>{char}</b>
            </span>
          ))}
        </h1>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-10 text-black">
        <b>
          {words[currentWordIndex === 3 ? 0 : currentWordIndex + 1]
            .split("")
            .map((char) => (
              <span className="inline-block mr-[2px]">{char}</span>
            ))}
        </b>
      </h1>
    </div>
  );
}

export default Hero;
