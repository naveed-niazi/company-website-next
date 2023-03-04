import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ content }) => {
  const autoplay = useRef(
    Autoplay(
      {
        delay: process.env.NODE_ENV === "development" ? 300000 : 3000,
        stopOnInteraction: false,
      },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [autoplay.current]
  );
  const contentByIndex = (index) => content[index % content.length];

  return (
    <div className="embla md:px-0 px-2">
      <div className="md:h-96 h-116 overflow-hidden" ref={viewportRef}>
        <div className="embla__container  ">
          {content.map((element, index) => (
            <div
              key={contentByIndex(index).id}
              className="pt-20 md:min-w-1/3 min-w-full block "
            >
              <div className="mx-auto h-full break-all md:px-4">
                <i
                  className={` ${
                    contentByIndex(index).icon
                  }   md:text-5xl text-6xl  font-normal text-orange-600  `}
                ></i>

                <h5 className="text-xl font-bold mt-12 md:mt-10 text-white">
                  {contentByIndex(index).title}
                </h5>
                <p className="font-thin mt-3 text-slate-200">
                  {contentByIndex(index).content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          key="section-shadow"
          className=" top-0 absolute bottom-0 w-full md:w-1/3	mx-auto left-0 right-0 h-full shadow-gray-500  shadow-xl"
        >
          <span className="block m-auto rounded center w-20 h-1 bg-orange-500 mt-2 mb-20 "></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
