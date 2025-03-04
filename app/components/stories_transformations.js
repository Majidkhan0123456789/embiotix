"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "animate.css"; // Import animate.css for animations

gsap.registerPlugin(ScrollTrigger);

const services = [
  { image: "/service1.webp", title: "Generative AI" },
  { image: "/service2.webp", title: "Dynamics365" },
  { image: "/service3.webp", title: "Mobile App Development" },
  { image: "/service4.webp", title: "Staff Augmentation" },
  { image: "/service5.webp", title: "DevOps" },
  { image: "/service6.webp", title: "UI/UX Design" },
  { image: "/service7.webp", title: "Web Development" },
  { image: "/service8.jpg", title: "Custom Software Development" },
];

function StoriesTransformations() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const grid = gridRef.current;

      gsap.fromTo(
        grid,
        { y: 100, opacity: 0 }, // Start position
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%", // Animation starts when 80% of the section is in view
            end: "bottom 40%",
            scrub: 1, // Enables smooth scrolling effect
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup
    };
  }, []);

  return (
    <section className="bg-[#171616] lg:px-24 md:px-16 px-8 py-4 lg:py-24 md:py-8 min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center animate__animated animate__fadeInRight">
          <div className="py-4 lg:py-16">
            <h5 className="text-[#8AF637] font-bold uppercase text-sm md:text-lg font-gilroy mb-2">
              Featured Insights
            </h5>
            <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff] font-gilroy leading-tight">
              Stories of our transformations across Services and{" "}
              <span className="text-[#ffffff] font-gilroy">Industries</span>
            </h2>
            <div className="py-4 md:block hidden">
              <span className="text-[#ffffff] leading-loose font-gilroy md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl text-sm">
                From Concept to completion
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Smooth Scrolling Image Grid */}
        <div className="h-full flex justify-center items-center">
          <div className="relative w-full animate__animated animate__fadeInLeft">
            <div
              ref={gridRef}
              className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-8"
            >
              {services.map((service, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden group">
                  <div className="relative w-full h-52">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110 h-full w-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-start p-4">
                      <h3 className="text-white text-md md:text-lg lg:text-xl font-bold font-gilroy">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default StoriesTransformations;