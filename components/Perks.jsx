import React from 'react';

const Perks = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 bg-gray-100 rounded-md mb-8 p-4 box-border transition duration-300 ease-in-out hover:shadow-md hover:bg-gray-300 transform hover:scale-105">
      <img src={imageSrc} alt={title} className="max-w-full h-28 object-contain mb-2 mx-auto" />
      <h3 className="mt-4 mb-5 text-center font-bold text-xl">{title}</h3>
      <p className="text-sm font-light leading-6 p-2 text-center list-decimal">{description}</p>
    </div>
  );
}

export default Perks;
