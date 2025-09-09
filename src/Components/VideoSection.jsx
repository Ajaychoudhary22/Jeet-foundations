import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel() {
  // Use absolute paths to images in the public folder
  const slides = [
    { 
      type: "image", 
      src: "/office_photo/Made_in_india.jpeg", 
      alt: "Made in India Initiative" 
    },
    { 
      type: "image", 
      src: "/office_photo/Clean_India.jpeg", 
      alt: "Clean India Initiative" 
    },
    { 
      type: "image", 
      src: "/office_photo/Tree_Plantation1.jpeg", 
      alt: "Tree Plantation Drive" 
    },
    { 
      type: "image", 
      src: "/office_photo/Office_Photo.jpeg", 
      alt: "JEE Welfare Foundation Office" 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="w-full flex justify-center items-center py-8 bg-gray-100">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
          JEE Welfare Foundation Activities
        </h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center items-center px-2">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="max-h-[400px] w-full object-contain mx-auto rounded-md"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
