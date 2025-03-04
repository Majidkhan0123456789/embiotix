 'use client'
import Marquee from 'react-fast-marquee';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

const features = [
  { imageUrl: "/features1.svg" },
  { imageUrl: "/features2.svg" },
  { imageUrl: "/features3.webp" },
  { imageUrl: "/features4.png" },
  { imageUrl: "/features5.png" },
  { imageUrl: "/features6.png" },
  { imageUrl: "/features7.webp" },
  { imageUrl: "/features8.svg" },
  { imageUrl: "/features9.svg" },
  { imageUrl: "/features10.svg" },
];

export default function Service() {
  return (
    <div className="mx-auto">
      {/* First Marquee (Right to Left) */}
      <div className="bg-[#34706A]">
        <Marquee speed={100} play={true} loop={0} pauseOnHover={false} gradient={false} direction="left">
          {features.map((item, index) => (
            <div className="md:py-2 py-0" key={index}>
              <Image 
                src={item.imageUrl}  
                width={300} 
                height={300} 
                className="h-40 w-40 object-contain rounded-lg my-auto p-5 mx-auto"  
                alt={`Gallery item ${index}`} 
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second Marquee (Left to Right) */}
      <div className="bg-[#34706A]">
        <Marquee speed={100} play={true} loop={0} pauseOnHover={false} gradient={false} direction="right">
          {features.map((item, index) => (
            <div className="md:py-3 py-0" key={index}>
              <Image 
                src={item.imageUrl}  
                width={300} 
                height={300} 
                className="h-40 w-40 object-contain rounded-lg my-auto p-5 mx-auto"  
                alt={`Gallery item ${index}`} 
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
