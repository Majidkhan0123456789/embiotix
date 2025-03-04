 "use client";
import { useEffect, useRef } from "react";

const VideoSlider = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Autoplay failed:", error));
    }
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          poster="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F67988ed24841623ccd9affd6_homepage%20global%20%281%29-poster-00001.jpg"
        >
          <source
            src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F67988ed24841623ccd9affd6_homepage%20global%20%281%29-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61%2F67988ed24841623ccd9affd6_homepage%20global%20%281%29-transcode.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      {/* Slider Content */}
      <div className="relative z-[2] py-24 px-24 w-full">
        <div className="xs:w-[100%] sm:w-[100%] lg:w-[50%] md:w-[50%]">
          <h1 className="text-white text-3xl md:text-5xl font-bold font-gilroy">
            Drive Tomorrow’s Possibilities
          </h1>
          <div className="py-2 md:block hidden">
            <p className="text-[#ffffff] leading-loose font-gilroy md:text-lg lg:text-2xl xl:text-2xl 2xl:text-3xl text-sm">
              We help companies redefine the future through technology
            </p>
          </div>
          <div className="mt-3 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button
              className="relative md:px-4 md:py-2 lg:py-3 px-2 py-2 rounded-full w-auto 
              2xl:text-xl xl:text-xl md:text-base text-sm text-[#ffffff] font-gilroy bg-[#8AF637] 
              border-2 border-[#8AF637] overflow-hidden transition-all duration-300 
              hover:bg-[#ffffff] hover:text-[#151718] hover:scale-110"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;