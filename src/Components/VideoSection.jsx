import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing all images from components/office_photo/
import madeInIndia from "./office_photo/made_in_india.jpeg";
import cleanIndia from "./office_photo/clean_india.jpeg";
import treePlantation1 from "./office_photo/tree_plantation1.jpeg";
import officePhoto from "./office_photo/office_photo.jpeg";


export default function ImageCarousel() {
  const slides = [
    { type: "image", src: madeInIndia, alt: "Made in India Initiative" },
    { type: "image", src: cleanIndia, alt: "Clean India Initiative" },
    { type: "image", src: treePlantation1, alt: "Tree Plantation Drive" },
    { type: "image", src: officePhoto, alt: "JEE Welfare Foundation Office" },
    
    
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