"use client";
import { useState } from "react";
import Slider from "react-slick";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default for larger screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // For tablets and below
      settings: {
        slidesToShow: 3, // Show 3 slides on tablets
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For mobile devices
      settings: {
        slidesToShow: 2, // Show 2 slides on mobile
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 425, // For small mobile devices
      settings: {
        slidesToShow: 1, // Show 1 slide on mobile
        slidesToScroll: 1,
      },
    },
  ],
};

const features = [
  { title: "3,000+", description: "Success" },
  { title: "23+", description: "Countries Supported" },
  { title: "236+", description: "Active Clients" },
  { title: "15+", description: "Years of Enablement Experience" },
];

function Achievements() {
  return (
    <div className="mx-auto bg-[#171616] lg:py-8 py-4">
      <div className="w-full py-5">
        <div className="lg:w-[80%] mx-auto py-4">
          <div className="flex w-full items-center flex-col py-2 md:py-5 space-y-2">
            <div className="w-full text-center">
              <h5 className="text-[#8AF637] font-bold uppercase text-sm md:text-base font-gilroy mb-2">
                Pioneering Trust and Innovation
              </h5>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#ffffff] font-gilroy leading-tight mb-6">
                Embiotix’s Achievements{" "}
              </h2>
            </div>
          </div>
          <div className="md:py-6 py-3 px-3 md:px-0">
            <p className="md:text-lg font-gilroy text-justify 2xl:text-xl text-sm md:text-center text-[#fff] font-normal">
              At Embiotex, we take pride in empowering businesses worldwide with
              innovative solutions. We bring an unwavering commitment to
              excellence, backed by a global presence.
            </p>
          </div>
        </div>
        <div className="md:w-[90%] w-full mx-auto">
          <Slider {...sliderSettings}>
            {features.map((feature, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#8AF637] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center h-full min-h-[200px] text-center">
                  {/* Content Section */}
                  <h3 className="2xl:text-7xl xl:text-5xl lg:text-xl md:text-lg text-base font-gilroy font-bold text-white">
                    {feature.title}
                  </h3>
                  <span className="text-white text-sm md:text-base lg:text-xl xl:text-2xl leading-relaxed font-semibold font-gilroy">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Achievements;