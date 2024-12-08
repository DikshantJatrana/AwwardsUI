import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <section className="w-full relative p-6 md:p-16 ">
      <div className="bg-black text-blue-75 relative rounded-md overflow-hidden py-8">
        <div className="flex flex-col items-center">
          <p className="text-xs md:text-[10px] font-general text-center">
            Join Zentry
          </p>
          <h1 className="font-zentry special-font text-4xl text-center mt-8 md:text-6xl">
            let’s b<b>u</b>ild the <br />
            new era of g<b>a</b>ming <br />t<b>o</b>gether.
          </h1>
          <Button
            id="contact-btn"
            title={"Contact Us"}
            containerClass={"text-center my-8 text-sm font-general"}
          />
        </div>
        <div className="absolute hidden md:block -top-10 contact-clip-path-1 w-[30%]">
          <img
            src="img/contact-1.webp"
            alt="contact-1"
            className="size-full object-cover object-center"
          />
        </div>
        <div className="absolute hidden md:block -bottom-20 left-10 contact-clip-path-2 w-[30%]">
          <img
            src="img/contact-2.webp"
            alt="contact-2"
            className="size-full object-cover object-center"
          />
        </div>
      </div>
      <div className="absolute sword-man-clip-path -top-[27%] md:top-0 right-[25%] w-[46%] md:right-0 md:w-[32%]">
        <img
          src="img/swordman.webp"
          alt="contact-2"
          className="size-full object-cover object-center"
        />
      </div>
    </section>
  );
}

export default Contact;
