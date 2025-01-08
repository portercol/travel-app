import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py20 xl:flex-row">
      <div className="hero-map" />

      {/* Left hand side */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 mt-4 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular mt-6 text-slate-600 xl:max-w-[520px]">
          Let us join you on your adventure while you seek adventure and
          satisfaction of seeing the natural & incorruptible beauty of nature.
          Our app can help you find adventure all around the world.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  width={24}
                  height={24}
                  alt="star icon"
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-cyan-600">
            200k
            <span className="regular-16 lg:regular-20 ml-1">Great reviews</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How it works"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* Location Stats */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex flex-col gap-8 w-[268px] rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-slate-400">Location</p>
              <Image src="/close.svg" alt="close icon" width={24} height={24} />
            </div>
            <p className="bold-20 text-slate-200">Aguas Calientes</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 text-slate-400">Distance</p>
              <p className="bold-20 text-slate-200">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 text-slate-400">Elevation</p>
              <p className="bold-20 text-slate-200">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
