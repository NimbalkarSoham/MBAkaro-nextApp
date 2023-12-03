
import React from 'react';

const Perks = ({ imageSrc, title, description }) => {
  return (
    <div className="flex-basis-31  rounded-md mb-5 text-center">
      <img src={imageSrc} alt={title} className="w-40  mx-auto block" />
      <h3 className="mt-4 mb-5 text-center font-bold text-xl">{title}</h3>
      <p className="text-sm font-light leading-6 p-2 text-center">{description}</p>
    </div>
  );
}

export default Perks;