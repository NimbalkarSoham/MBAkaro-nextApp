import React from "react";
import Image from "next/image";
import Img from "@/images/people.jpeg";

import Card from "@/components/Card";
import Course from "@/components/Course";
import Perks from "@/components/Perks";
import Testimonial from "@/components/Testimonial";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
              src={Img}
              alt="About Us Image"
              className="w-full h-auto rounded-md"
              width={200}
              height={200}
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
              Learn More
            </button>
          </div>
          <div className="about-image flex-1 flex items-center justify-center mb-4 md:mb-0">
            <Image
              src="data:image/jpeg;base64,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"
              alt="About Us Image"
              className="w-full h-auto rounded-md"
              width={200}
              height={200}
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
              courseTitle="Marketing Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114137.249.png"
              courseTitle="Human Resource Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114401.697.png"
              courseTitle="Finance Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114458.193.png"
              courseTitle="IT Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T114934.333.png"
              courseTitle="Marketing Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T115851.354.png"
              courseTitle="Human Resource Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120010.258.png"
              courseTitle="Finance Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120132.142.png"
              courseTitle="IT Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120315.411.png"
              courseTitle="Marketing Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120518.784.png"
              courseTitle="Human Resource Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120618.202.png"
              courseTitle="Finance Management"
            />
          </div>
          <div className=" p-4">
            <Course
              imageSrc="https://mbakaro.com/wp-content/uploads/2023/06/Untitled-design-2023-06-16T120658.450.png"
              courseTitle="IT Management"
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

        <div className="row flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Testimonial
            imageSrc="/Work.png"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, veniam nisi fugiat rem, magnam praesentium non voluptatum unde, ex atque assumenda accusamus vitae? Consectetur harum non cupiditate vero tempore magnam."
            userName="User Name"
            stars={4}
          />
          <Testimonial
            imageSrc="/Work.png"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, veniam nisi fugiat rem, magnam praesentium non voluptatum unde, ex atque assumenda accusamus vitae? Consectetur harum non cupiditate vero tempore magnam."
            userName="User Name"
            stars={3.5}
          />
        </div>
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
