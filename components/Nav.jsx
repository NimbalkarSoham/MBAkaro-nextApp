"use client";

import React from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useState, useEffect } from 'react';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 pt-4 bg-transparent absolute w-full z-50">
      <a href="index.html">
        {/* <Image src="" alt="" className="w-12" /> */}
      </a>
      <div className="nav-links ml-auto">
        {/* <i className="fa fa-times" onClick={() => hideMenu()}></i> */}
        <ul className="flex space-x-4">
          <li className="relative">
            <a href="" className="text-white text-sm px-3 py-2 ">Home</a>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
          </li>
          <li className="relative">
            <a href="/pages/aboutUs.html" className="text-white text-sm px-3 py-2">About</a>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
          </li>
          <li className="relative">
            <a href="#courses" data-scroll className="text-white text-sm px-3 py-2">Courses</a>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
          </li>
          <li className="relative">
            <a href="/pages/contactUs.html" className="text-white text-sm px-3 py-2">Contact Us</a>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition duration-500 ease-in-out"></span>
          </li>
        </ul>
      </div>
      {/* <i className="fa fa-bars" onClick={() => showMenu()}></i> */}
    </nav>
  );
}

export default Nav;
