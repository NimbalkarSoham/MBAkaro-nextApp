"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Removed email sending logic

    // Reset form fields on successful submission
    setFormData({ name: '', email: '', message: '' });

    // Display success message or perform any other action
    console.log('Form submitted successfully');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <nav className="flex items-center justify-between px-6 pt-4 bg-transparent w-full z-50">
          {/* Navigation content */}
        </nav>
      </div>

      <div className="contact-container mt-11 mx-4 md:mx-20 lg:mx-40 flex flex-col md:flex-row shadow-lg">
        <Image
          src="/contactus.jpg"
          alt="About Us Image"
          className="left-col w-full md:w-2/5 h-60 md:h-auto"
          width={600}
          height={500}
        />

        <div className="right-col flex-1 p-4 md:p-8 bg-white shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Contact us</h1>

          <form id="contact-form" method="post" onSubmit={handleSubmit}>
            {/* Form fields */}
            <button
              type="submit"
              id="submit"
              name="submit"
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none hover:opacity-80"
            >
              Send
            </button>
          </form>

          {/* Display error and success messages */}
          <div id="error" className="text-sm text-red-500 mt-2"></div>
          <div id="success-msg" className="text-sm text-green-500 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
