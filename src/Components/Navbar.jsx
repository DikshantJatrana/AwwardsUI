import React, { useRef, useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import Button from "./Button";

function Navbar() {
  const NavContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const [AudioPlaying, SetAudioPlaying] = useState(false);

  const AudioToggle = () => {
    SetAudioPlaying((prev) => !prev);
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
      className="fixed z-50 font-general w-[95%] left-[2.5%] top-2  h-16 uppercase transition-all border-none duration-700"
    >
      <div className="text-[12px] w-full absolute top-1/2 -translate-y-1/2 px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <FaLocationArrow color="#ffffff" size={25} />
            <Button title="Product" id="Product" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-white">
              {NavItem.map((item, index) => (
                <a
                  className="rounded-full px-2 py-1 transition-all duration-150 cursor-pointer hover:text-black hover:bg-blue-100"
                  key={index}
                >
                  {item}
                </a>
              ))}
            </div>
            <TiThMenu size={30} color="#ffffff" className="block md:hidden" />
            <button
              className="flex items-center text-white"
              onClick={AudioToggle}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="audio/public_audio_loop.mp3"
                loop
              />
              <BsSoundwave color="#ffffff" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
