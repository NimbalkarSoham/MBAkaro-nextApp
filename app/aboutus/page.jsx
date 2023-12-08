import React from "react";
import Image from "next/image";
import Img from "@/images/people.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <nav className="flex items-center justify-between px-6 pt-4 bg-transparent w-full z-50">
          {/* Your navigation content goes here */}
        </nav>
      </div>

      <div className="about-container  bg-white mt-20 mx-36  p-8 shadow-md my-8 rounded-md flex flex-col md:flex-row">
        <div className="about-image flex-1 flex items-center justify-center mb-4 md:mb-0">
          <Image
            src={Img}
            alt="About Us Image"
            className="w-full h-auto rounded-md md:rounded-l-md md:rounded-t-md"
            width={200}
            height={200}
          />
        </div>
        <div className="about-content flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-4">We Are Inance</h2>
          <p className="text-gray-700">
            Mbakaro is an ED-tech company where you can find a number of top
            colleges for MBA. We provide information and resources for those
            students who are interested in pursuing an MBA degree through
            distance learning. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Distinctio, quisquam cum. Quia dolore maxime error, eum eaque
            ex tenetur architecto optio repellendus culpa, aliquid dignissimos
            possimus alias porro iure hic! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, quisquam cum. Quia dolore maxime
            error, eum eaque ex tenetur architecto optio repellendus culpa,
            aliquid dignissimos possimus alias porro iure hic!
          </p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none hover:opacity-80">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
