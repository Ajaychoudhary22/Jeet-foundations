import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing all images from components/office photo/
import madeInIndia from "./office photo/Made in india.jpeg";
import cowShed from "./office photo/Cow shed.jpeg";
import cleanIndia from "./office photo/Clean India.jpeg";
import treePlantation1 from "./office photo/Tree Plantation1.jpeg";
import officePhoto from "./office photo/Office Photo.jpeg";

export default function VideoSection() {
  const slides = [
    { type: "image", src: madeInIndia },
    { type: "image", src: cowShed },
    { type: "image", src: cleanIndia },
    { type: "image", src: treePlantation1 },
    { type: "image", src: officePhoto },
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
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center items-center">
              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="max-h-[400px] w-auto mx-auto rounded-lg object-contain"
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={`slide-${index}`}
                  className="max-h-[400px] w-auto mx-auto rounded-lg object-contain"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
