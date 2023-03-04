import React from "react";
import Image from "next/image";
import { SERVICES_CONTENT } from "./constants";

const ServicesTest = () => {
  return (
    <section className="table relative w-full bg-gray-100 px-48 py-44 text-center  ">
      <div className="pb-20 opacity-70">
        <h1 className=" pb-2 text-4xl font-semibold ">Services</h1>
        <p className=" text-lg	  ">
          We provide the best in class services for our customer
        </p>
      </div>

      <div className="grid bg-gray-100 w-full  md:grid-cols-3 grid-cols-1 gap-3 ">
        {SERVICES_CONTENT.map((service) => (
          <div
            key={service.id}
            className="p-6 pt-0 max-w-sm   hover:shadow-2xl  group 	"
          >
            <span className="block invisible m-auto rounded center w-20 h-1 bg-orange-500 mb-20 group-hover:visible "></span>
            <i
              id="bar"
              className={` ${service.icon}   text-5xl py-6 font-normal text-orange-600 `}
            ></i>
            <h5 className=" text-2xl font-semibold opacity-70 mb-2 tracking-tight	  ">
              {service.title}
            </h5>
            <p className="text-slate-500 mb-2 tracking-tight">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesTest;
