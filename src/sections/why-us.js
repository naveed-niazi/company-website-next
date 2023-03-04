import React, { useState } from "react";
import Image from "next/image";
import { WHY_US_CONTENT } from "./constants";
import Carousel from "../components/carousel";

const WhyUsSection = () => {
  return (
    <section
      id="whynaremis"
      className="table relative w-full bg-gray-100 md:h-screen pt-6 md:pb-28 pb-20 text-center "
    >
      <div className="pb-8 text-center ">
        <h1 className="pb-4 text-4xl font-semibold">
          <span className="opacity-70  ">Why </span>
          <span className="text-orange-600 opacity-100">Naremis?</span>
        </h1>

        <p className="text-lg opacity-70 px-5 ">
          We Deliver Clean Code, Error Free, and Secure Web Applications
        </p>
      </div>
      <div className="block  bg-slate-700 shadow-gray-500	shadow-2xl mix-blend-multiply		">
        <Carousel content={WHY_US_CONTENT} />
      </div>
    </section>
  );
};
export default WhyUsSection;
