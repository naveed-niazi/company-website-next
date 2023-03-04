import React from "react";
import Image from "next/image";
import { SERVICES_CONTENT } from "./constants";

const Services = () => {
  return (
    <section
      id="services"
      className="table relative w-full h-screen bg-gray-100  md:px-48 px-5 md:pt-6 pt-8 md:pb-28 pb-8 text-center"
    >
      <div className="pb-8 opacity-70">
        <h1 className="pb-4 text-4xl font-semibold">Our Services</h1>
        <p className=" text-lg	  ">
          We provide the best in class services for our customer
        </p>
      </div>

      <div className="grid bg-gray-100 w-full  md:grid-cols-3 grid-cols-1 md:gap-3 gap-5">
        {SERVICES_CONTENT.map((service) => (
          <div
            key={service.id}
            className="transition ease-in-out duration-75 p-4 max-w-sm bg-white  border border-gray-200 drop-shadow-md  mx-auto hover:scale-105 hover:shadow-2xl	 "
          >
            <i
              className={` ${service.icon}   text-4xl py-4 font-normal text-orange-600 `}
            ></i>
            <h5 className=" text-xl font-bold opacity-60 mb-1	  ">
              {service.title}
            </h5>
            <p className="text-slate-500 text-sm  subpixel-antialiased		">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
