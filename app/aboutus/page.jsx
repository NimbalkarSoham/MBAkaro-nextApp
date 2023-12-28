import React from "react";
import Image from "next/image";
import Img from "@/images/people.jpeg";

import Card from "@/components/Card";
import Course from "@/components/Course";
import Perks from "@/components/Perks";
import Testimonial from "@/components/Testimonial";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 pt-4 bg-transparent w-full z-50">
          {/* Your navigation content goes here */}
        </nav>
      </div>
      <div className="bg-white mt-8 mx-4 md:mx-8 lg:mx-16 p-4 md:p-8 shadow-md my-8 rounded-md">
        <div className="about-container  flex flex-col md:flex-row">
          <div className="about-image flex-1 flex items-center justify-center mb-4 md:mb-0">
            <Image
              src='/b1.jpg'
              alt="About Us Image"
              className="w-full h-auto rounded-md"
              width={500}
              height={500}
            />
          </div>
          <div className="about-content flex-1 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            What Is MBAkaro
            </h2>
            <p className="text-gray-700">
            Mbakaro is an ED-tech company where you can find a number of top colleges for MBA. We provide information and resources for those students who are interested in pursuing an MBA degree through distance learning. We are extensively the foremost online platform for students which helps them to deliver the latest information, news, and updates on MBA programs offered through distance learning. The website serves as a one-stop destination for MBA aspirants, offering a range of resources such as articles, guides, videos, and webinars. These resources are curated by experts and industry professionals, ensuring that learners receive accurate and reliable information.  

We give a comprehensive directory of MBA programs offered by us through distance learning. This directory helps students filter and select MBA programs that best suit their career goals, interests, and budget. Students can search for MBA programs based on various criteria such as program type, duration, accreditation, and specialization.  MBAkaro is a valuable resource for anyone interested in pursuing an MBA degree through distance learning.  MBAkaro is an excellent platform for anyone looking to advance their career through higher education. So if you are considering pursuing an MBA degree through distance learning, be sure to check out MBAkaro for all your MBA-related needs. 
            </p>
            
          </div>
        </div>
        <br />
        <div className="about-container  flex flex-col md:flex-row">
          <div className="about-content flex-1 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Why MBAkaro
            </h2>
            <p className="text-gray-700">
            MBA (Master of Business Administration) is a highly sought-after professional degree that provides individuals with the skills and knowledge necessary to succeed in the business world. It is a versatile degree that is valued by employers across various industries and sectors.  Our vision is to make students a master in the respective specialization of management skills which will surely be helpful for our alumni to work upon in practical-based work in official life.

MBAkaro is on a mission of providing a dynamic and supportive learning environment that nurtures intellectual curiosity, critical thinking, and creativity among students. To offer a range of innovative and relevant academic programs that meet the evolving needs of the industry and society. To promote academic excellence through higher education with a smooth process of learning under the best universities which will be guided by us.


            </p>
            <button className="mt-4 bg-red-500  text-white px-4 py-2 rounded-full focus:outline-none hover:opacity-80">
              <Link href='/'>Learn More</Link>
            </button>
          </div>
          <div className="about-image flex-1 flex items-center justify-center mb-4 md:mb-0">
            <Image
              src="/b2.jpg"
              alt="About Us Image"
              className="w-full h-auto rounded-md"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <section
        id="courses"
        className="courses max-w-screen-xl pt-6 mx-auto text-center py-24 px-4 md:px-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our hiring Partners</h1>

        <div className="grid pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T113805.049.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114137.249.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114401.697.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114458.193.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114934.333.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T115851.354.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120010.258.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120132.142.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120315.411.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120518.784.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120618.202.png"
              courseTitle=""
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120658.450.png"
              courseTitle=""
            />
          </div>
        </div>
      </section>

      
      <br />
      <br />
      <section className="testimonials max-w-screen-xl mx-auto text-center ">
        <h1 className="text-4xl font-bold mb-4 py-3">
          What does people say about us
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ipsum laudantium, illum dolores voluptas enim blanditiis assumenda odio
          et nesciunt eius labore. Assumenda at illo, accusantium laborum sit
          eveniet excepturi?
        </p> */}

        
      </section>
      <section
        className="cta bg-cover bg-center py-8 text-center rounded-md"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/college.png)",
          width: "70%",
          margin: "50px auto",
        }}
      >
        <h1 className="text-white text-4xl font-bold mb-8">
          Enroll course and know more
        </h1>
        <a
          href="./contactUs.html"
          className="inline-block text-white no-underline border border-white px-8 py-3 text-sm bg-transparent hover:border-red-500 hover:bg-red-500 transition duration-500 ease-in-out rounded-md"
        >
          Contact us
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
