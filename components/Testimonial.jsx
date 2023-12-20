
import React from 'react';

const Testimonial = ({ imageSrc, content, userName, stars }) => {
  return (
    <div className=" flex-basis-44 bg-gray-100  rounded-md mb-5 text-left p-6 cursor-pointer">
      <div className="flex items-center">
        <img src={imageSrc} alt={userName} className="h-10 w-10 rounded-full mr-3" />
        <div>
          <p className="p-0">{content}</p>
          <h3 className="mt-4 font-bold">{userName}</h3>
          <div className="flex">
            {[...Array(Math.floor(stars))].map((_, index) => (
              <i key={index} className="fa fa-star"></i>
            ))}
            {stars % 1 !== 0 && <i className="fa fa-star-half-o"></i>}
            {[...Array(5 - Math.ceil(stars))].map((_, index) => (
              <i key={index + Math.ceil(stars)} className="fa fa-star-o"></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
