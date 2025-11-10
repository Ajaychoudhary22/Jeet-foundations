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
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            {/* 🖼️ Full Image (no crop) */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-contain bg-black"
            />

            {/* 📝 Alt text at left-bottom on image */}
            <div className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-semibold drop-shadow-lg">
              {slide.alt}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
