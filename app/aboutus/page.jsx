import React from "react";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import Img from "@/images/people.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <nav className="flex  items-center justify-between px-6 pt-4 bg-transparent w-full z-50">
          <div className="nav-links ml-auto">
            {/* <i className="fa fa-times" onClick={() => hideMenu()}></i> */}
            <ul className="flex space-x-4">
              <li className="relative">
                <Link href="/" className="text-white text-sm px-3 py-2 ">
                  Home
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
              </li>
              <li className="relative">
                <Link href="/aboutus" className="text-white text-sm px-3 py-2">
                  About
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
              </li>
              <li className="relative">
                <Link
                  href="#courses"
                  data-scroll
                  className="text-white text-sm px-3 py-2"
                >
                  Courses
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
              </li>
              <li className="relative">
                <Link
                  href="/contactus"
                  className="text-white text-sm px-3 py-2"
                >
                  Contact Us
                </Link>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
              </li>
            </ul>
            {/* <div className="auth">
          {isUserLoggedIn?(
            <div className="button">
              <button type='button' onClick={signOut}>Sign out</button>
            </div>
          ):(
            <></>
          )}
        </div> */}
          </div>
          {/* <i className="fa fa-bars" onClick={() => showMenu()}></i> */}
        </nav>
      </div>

      <div className="about-container bg-white mt-20 w-4/5  mx-auto p-8 shadow-md my-8 rounded-md flex">
        <div className="about-image flex-1 flex items-center justify-center">
          <Image
            src={Img}
            alt="About Us Image"
            className="w-full h-auto rounded-l-md"
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
            distance learning.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Distinctio, quisquam cum. Quia dolore maxime error, eum eaque
            ex tenetur architecto optio repellendus culpa, aliquid dignissimos
            possimus alias porro iure hic!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, quisquam cum. Quia dolore maxime
            error, eum eaque ex tenetur architecto optio repellendus culpa,
            aliquid dignissimos possimus alias porro iure hic!
          </p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none hover:opacity-80">
            Learn More
          </button>
        </div>
      </div>

      <section className="footer text-center py-8">
        <h4 className="font-semibold mb-4">About Us</h4>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          quisquam cum. Quia dolore maxime error, eum eaque ex tenetur
          architecto optio repellendus culpa, aliquid dignissimos possimus alias
          porro iure hic!
        </p>
        <div className="icons text-red-500">
          <i className="fab fa-facebook mx-2"></i>
          <i className="fab fa-twitter mx-2"></i>
          <i className="fab fa-instagram mx-2"></i>
          <i className="fab fa-linkedin mx-2"></i>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;