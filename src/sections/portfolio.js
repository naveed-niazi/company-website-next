import React from "react";
import Image from "next/image";
import rohanImg from "../assets/rohan-profile.png";
import portfolio_1_img from "../assets/pnr-portal.jpg";
import { PORTFOLIO_CONTENT } from "./constants";
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="table relative h-screen w-full   bg-slate-600  "
    >
      <div className="pb-32  text-center bg-white pt-8">
        <h1 className=" pb-4 opacity-70 text-4xl font-semibold ">
          Our Portfolio
        </h1>
        <p className="text-lg opacity-70 leading-relaxed md:w-10/12 w-full md:mx-auto px-5 text-gray-800">
          Experience the quality of our work firsthand with a glimpse into our
          diverse range of successful projects. From web development to mobile
          apps to cloud solutions, our portfolio showcases the versatility and
          expertise of our team at Naremis.
        </p>
      </div>
      <div className=" grid w-full grid-cols-1 md:gap-8 gap-32 text-gray-800  md:px-20 px-5 md:pb-26 pb-8 ">
        {PORTFOLIO_CONTENT.map((portfolio, index) => (
          <div key={portfolio.id} className=" -mt-24 mx-auto md:w-1/3 w-full ">
            <h2
              className={`text-center text-xl font-semibold mb-4 md:text-gray-700  ${
                index !== 0 ? "text-white" : "text-gray-700"
              }`}
            >
              {portfolio.title}
            </h2>
            <div className="transition ease-in-out md:hover:-translate-y-4 ">
              <a href={portfolio.url} target="_blank">
                {" "}
                <Image
                  priority={false}
                  src={portfolio.img}
                  alt="Porfolio Image"
                  className="rounded-xl"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="md:h-72 0 block mt-24 h-96	z-0"></div> */}
    </section>
  );
};
export default Portfolio;
