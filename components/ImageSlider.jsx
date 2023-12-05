"use client";
import React, { useState, useEffect } from 'react'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform transform ${
            index === currentIndex ? 'translate-x-0 duration-300' : 'translate-x-full duration-300'
          } ease-in-out`}
        >
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover " />
          <div className="absolute inset-0 gradient-overlay"></div>
          <div className="absolute inset-0 flex flex-col w-fit ml-16 justify-end pb-40">
            <div className="text-white text-center w-fit font-extrabold text-7xl p-2">
              {image.title}
            </div>
            <div className="text-white text-center p-3 w-fit font-extralight text-2xl">
              {image.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageSlider