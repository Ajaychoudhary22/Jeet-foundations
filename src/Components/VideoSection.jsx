import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel() {
  const slides = [
    { src: "/office_photo/Made_in_india.jpeg", alt: "Made in India Initiative" },
    { src: "/office_photo/Clean_India.jpeg", alt: "Clean India Initiative" },
    { src: "/office_photo/Tree_Plantation1.jpeg", alt: "Tree Plantation Drive" },
    { src: "/office_photo/Office_Photo.jpeg", alt: "JEE Welfare Foundation Office" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-screen object-cover"
            />

            {/* Optional overlay for text or dim effect */}
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg">
                {slide.alt}
              </h2>
            </div>
          </div>
        ))}
      </Slider>

      {/* Optional Section Title (can remove if not needed) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white font-semibold">
        
      </div>
    </div>
  );
}
