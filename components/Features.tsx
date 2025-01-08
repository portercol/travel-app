import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex flex-1 flex-col w-full items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map icon" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-slate-600 lg:mt-[30px]">{description}</p>
    </li>
  );
};

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="flex max-container padding-container relative w-full justify-end">
        {/* Left hand side (desktop) */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        {/* Right hand side (desktop) */}
        <div className="z-20 flex flex-col w-full lg:w-[60%]">
          <div className="relative">
            <Image src="/camp.svg" alt="camp icon" width={50} height={50} />
            <h2 className="bold-40 lg:bold-64 my-3">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
