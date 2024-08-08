import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function ContactUs() {

  return (
    <>
      <div className='bg-contactBgImage rounded-b-3xl bg-cover bg-center h-72 flex justify-center items-center'>
        <h1 className=' text-white font-extrabold text-5xl md:text-8xl uppercase'>Contact Us</h1>
      </div>
      {/* Contact start */}
      <section className="mt-10 min-h-screen bg-gray-50">
        <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-black lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Get a quote</h1>

              <p className="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <CiLocationOn className='h-6 w-6 text-pr-color' />
                  <span className="mx-2 text-black truncate w-72">
                    Wadada warshadaha (Mogadisho Somalia)
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <IoIosCall className='h-6 w-6 text-pr-color' />
                  <span className="mx-2 text-black truncate w-72">000</span>
                </p>

                <p className="flex items-start -mx-2">
                  <MdOutlineMailOutline className='h-6 w-6 text-pr-color' />
                  <span className="mx-2 text-black truncate w-72">info@ourport.so</span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-spr-color">Follow us</h3>

                <div className="flex mt-4 -mx-1.5">
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'>
                    <FaFacebookSquare className='h-6 w-6 text-pr-color' />
                    <a href="https://www.facebook.com/AfiWaterSupply"></a>
                  </span>
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'>
                    <FaSquareXTwitter className='h-6 w-6 text-pr-color' />
                    <a href="#"></a>
                  </span>
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'>
                    <FaSquareYoutube className=' h-6 w-6 text-pr-color' />
                    <a href="#"></a>
                  </span>
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'>
                    <FaInstagram className='h-6 w-6 text-pr-color' />
                    <a href="#"></a>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-xl">
                <h1 className="text-xl font-medium text-gray-700">Contact form</h1>

                {!submitted ? (
                  <form className="mt-4" onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-spr-color rounded-md focus:border-spr-color focus:ring-pr-color focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600">Email address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email."
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-spr-color rounded-md focus:border-spr-color focus:ring-pr-color focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600">Message.</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 bg-white border border-spr-color rounded-md focus:border-spr-color focus:ring-pr-color focus:ring-opacity-40 focus:outline-none focus:ring"
                        placeholder="Message."
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide capitalize transform rounded-md transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80">
                      Get in touch
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700">Thank you!</h2>
                    <p className="mt-4 text-gray-600">Your message has been sent successfully. We will get back to you soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    
     
    </>
  );
}
