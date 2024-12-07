import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";
import Button from "./Button";

function Navbar() {
  const NavContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const [AudioPlaying, SetAudioPlaying] = useState(false);

  const AudioToggle = () => {
    SetAudioPlaying((perv) => !perv);
  };

  const { y: currentScroll } = useWindowScroll();
  const [isVisible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    if (AudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [AudioPlaying]);

  useEffect(() => {
    if (currentScroll === 0) {
      setVisible(true);
      NavContainerRef.current.classList.remove("floating-nav");
    } else if (currentScroll > lastScroll) {
      setVisible(false);
      NavContainerRef.current.classList.add("floating-nav");
    } else if (lastScroll > currentScroll) {
      setVisible(true);
      NavContainerRef.current.classList.add("floating-nav");
    }
    setLastScroll(currentScroll);
  }, [currentScroll, lastScroll]);

  useEffect(() => {
    gsap.to(NavContainerRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isVisible]);

  const NavItem = ["NEXUS", "VALUT", "PROLOGUS", "ABOUT", "CONTACT"];
  return (
    <div
      ref={NavContainerRef}
      className="fixed z-50 font-general top-5 h-16 uppercase transition-all border-none duration-700 sm:inset-x-6"
    >
      <div className="text-[12px] w-full lg:text-[14px] absolute top-1/2 -translate-y-1/2 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex h-full items-center gap-4">
            <FaLocationArrow color="#ffffff" size={25} />
            <Button title="Product" id="Product" />
          </div>
          <div className="flex h-full items-center">
            <div className="gap-6 text-white hidden md:block">
              {NavItem.map((item, index) => (
                <a
                  className="rounded-full mr-3 px-2 py-1 transition-all duration-150 cursor-pointer hover:text-black hover:bg-blue-100 "
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-4 flex items-center text-white space-x-1"
              onClick={AudioToggle}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="audio/public_audio_loop.mp3"
                loop
              />
              <BsSoundwave color="#fffff" height={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
