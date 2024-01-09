import React from "react";

const Course = ({ imageSrc, courseTitle }) => {
  return (
    <div className="flex-basis-[22%] md:flex-basis-[48%] lg:flex-basis-[22%] rounded-md mb-4 md:mb-0 lg:mb-6 relative overflow-hidden sm:w-52">
      <img
        src={imageSrc}
        alt={courseTitle}
        className="w-40 h-auto mx-auto block"
      />
      <h3 className="w-full text-xl block mt-5 font-bold">{courseTitle}</h3>
    </div>
  );
};

export default Course;
