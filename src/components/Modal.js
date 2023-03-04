import React from "react";
import closeIcon from "../assets/close.png";
import modalImg from "../assets/modal-img.jpg";
import modalImg2 from "../assets/modal-img2.svg";
import modalImg3 from "../assets/modal-img3.svg";

import Image from "next/image";

export default function Modal({ onClose, children, title }) {
  const modalVisbilityChange = () => {
    onClose(false);
    document.querySelector("body").classList.toggle("overflow-hidden");
  };
  const ignoreEvent = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="w-full h-full bg-black/70 fixed grid place-items-center z-40 top-0"
      onClick={modalVisbilityChange}
    >
      {/* modal content */}
      <div className="modal-layout bg-white rounded-sm  " onClick={ignoreEvent}>
        {/* left side of modal */}
        <div className="md:h-full rounded-l-sm md:w-3/6 w-full text-center md:p-10 ">
          {title}
          <div className="md:block hidden">
            <Image priority={true} src={modalImg3} alt="modal image" />
          </div>
        </div>
        {/* right side of modal */}
        <div className="md:w-2/3 w-full md:h-full md:relative ">
          {/* close button */}
          <button
            className="right-6 top-5 md:absolute hover:scale-125 md:block hidden"
            onClick={modalVisbilityChange}
          >
            <Image
              width="12px"
              height="12px"
              priority={true}
              src={closeIcon}
              alt="close icon"
            />
          </button>
          <div className="md:pt-12 md:pr-12 ">{children}</div>
        </div>
      </div>
    </div>
  );
}
