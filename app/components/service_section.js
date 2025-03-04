 "use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    image: "/service1.webp",
    title: "Generative AI",
  },
  {
    image: "/service2.webp",
    title: "Dynamics365",
  },
  {
    image: "/service3.webp",
    title: "Mobile App Development",
  },
  {
    image: "/service4.webp",
    title: "Staff Augmentation",
  },
  {
    image: "/service5.webp",
    title: "DevOps",
  },
  {
    image: "/service6.webp",
    title: "UI/UX Design",
  },
  {
    image: "/service7.webp",
    title: "Web Development",
  },
  {
    image: "/service8.jpg",
    title: "Custom Software Development",
  },
  {
    image: "/service9.webp",
    title: "Cybersecurity",
  },
  {
    image: "/service10.webp",
    title: "Data Analytics & Insights",
  },
  {
    image: "/service11.webp",
    title: "MS D365 CRM",
  },
  {
    image: "/service12.webp",
    title: "Power Apps",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 1.0,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function ServiceSection() {
  return (
    <main className="relative bg-cover bg-[#171616] lg:px-24 md:px-16 px-8 py-4 lg:py-24 md:py-8">
        {/* Section Title */}
      <div
        className="w-full text-left lg:py-12 md:py-8 py-4"
        
      >
        <h5 className="text-[#8AF637] font-bold uppercase text-sm md:text-base font-gilroy mb-2">
        Our Services
        </h5>
        <h2 className="text-3xl lg:text-5xl font-bold text-[#ffffff] font-gilroy leading-tight mb-6">
        Transform Your {" "}
          <span className="text-[#8AF637] font-gilroy">Business</span>
        </h2>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden group"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {/* Image as Background */}
            <div className="relative w-full h-72">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110 h-full w-full"
              />
              {/* Transparent Text Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-start p-4">
                <h3 className="text-white text-md md:text-lg lg:text-xl font-bold font-gilroy">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default ServiceSection;
