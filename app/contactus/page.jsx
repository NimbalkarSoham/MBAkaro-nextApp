import React from 'react';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div><nav className="flex  items-center justify-between px-6 pt-4 bg-transparent w-full z-50">
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
              <Link href="/contactus" className="text-white text-sm px-3 py-2">
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
      </nav></div>

      <div className="contact-container mt-11 mx-40 flex shadow-lg">
        <iframe
          className="left-col w-full flex-1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15195.890370129258!2d74.3955550966623!3d17.79298516206121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3b80000ffabbb%3A0x8805ef9216d347dd!2sKulakjai%2C%20Maharashtra%20415503!5e0!3m2!1sen!2sin!4v1701174459382!5m2!1sen!2sin"
          width="600" height="550" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="right-col flex-1 p-8 bg-white shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Contact us</h1>

          <form id="contact-form" method="post">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email Address" required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">Message</label>
            <textarea rows="6" placeholder="Your Message" id="message" name="message" required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
            <div id="clicked-address"></div>
            <button type="submit" id="submit" name="submit"
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none hover:opacity-80"
            >Send</button>
          </form>

          <div id="error" className="text-sm text-red-500 mt-2"></div>
          <div id="success-msg" className="text-sm text-green-500 mt-2"></div>
        </div>
      </div>

      <section className="footer text-center py-8">
        <h4 className="font-semibold mb-4">About Us</h4>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quisquam cum.
          Quia dolore maxime error, eum eaque ex tenetur architecto optio repellendus culpa,
          aliquid dignissimos possimus alias porro iure hic!
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

export default ContactUs;