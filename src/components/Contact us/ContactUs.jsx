import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

export default function contactUs() {
  return (
    <>
      <div className='bg-contactBgImage rounded-b-3xl bg-cover bg-center h-72 flex justify-center items-center'>
        <h1 className=' text-white font-extrabold text-5xl md:text-8xl uppercase'>contact Us</h1>
      </div>
      {/* Contact start */}
      <section class="mt-10 min-h-screen bg-gray-50 ">
        <div class="container flex flex-col min-h-screen px-6 py-12 mx-auto">
          <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div class="text-black lg:w-1/2 lg:mx-6">
              <h1 class="text-2xl font-semibold capitalize lg:text-3xl">Get a quote</h1>

              <p class="max-w-xl mt-6">Ask us everything and we would love to hear from you</p>

              <div class="mt-6 space-y-8 md:mt-8">
                <p class="flex items-start -mx-2">
                <CiLocationOn className='h-6 w-6 text-pr-color' />

                  <span class="mx-2 text-black  truncate w-72">
                    Wadada warshadaha (Mogadishu soomalia)
                  </span>
                </p>

                <p class="flex items-start -mx-2">
                <IoIosCall className='h-6 w-6 text-pr-color' />
                  <span class="mx-2 text-black  truncate w-72">000</span>
                </p>

                <p class="flex items-start -mx-2">
                <MdOutlineMailOutline className='h-6 w-6 text-pr-color' /> 
                  <span class="mx-2 text-black  truncate w-72">info@ourport.so</span>
                </p>
              </div>

              <div class="mt-6 md:mt-8">
                <h3 class="text-spr-color ">Follow us</h3>

                <div class="flex mt-4 -mx-1.5 ">
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaFacebookSquare className='h-6 w-6 text-pr-color' /> <a href="https://www.facebook.com/AfiWaterSupply"></a></span>
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaSquareXTwitter className='h-6 w-6 text-pr-color' /> <a href="#"></a></span>
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaSquareYoutube className=' h-6 w-6 text-pr-color' /> <a href="#"></a></span>
                  <span className='flex h-6 justify-center items-center font-bold cursor-pointer'><FaInstagram className='h-6 w-6 text-pr-color' /> <a href="#"></a></span>
                </div>
              </div>
            </div>

            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-gray-50 shadow-2xl rounded-xl">
                <h1 class="text-xl font-medium text-gray-700 ">Contact form</h1>

                <form class="mt-4">
                  <div class="flex-1">
                    <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input type="text" placeholder="Faarah Abdule" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-spr-color rounded-md  dark:text-gray-300 dark:border-spr-color focus:border-spr-color focus:ring-pr-colorfocus:ring-opacity-40 dark:focus:border-spr-color focus:outline-none focus:ring" />
                  </div>

                  <div class="flex-1 mt-6">
                    <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
                    <input type="email" placeholder="Faarah@gmail.com" class="block w-full px-5 py-3 mt-2 2 text-gray-700 bg-white border border-spr-color rounded-md  dark:text-gray-300 dark:border-spr-color focus:border-spr-color focus:ring-pr-colorfocus:ring-opacity-40 dark:focus:border-spr-color focus:outline-none focus:ring" />
                  </div>

                  <div class="w-full mt-6">
                    <label class="block mb-2 text-sm text-gray-600 ">Message</label>
                    <textarea class="block w-full h-32 px-5 py-3 mt-22 text-gray-700 bg-white border border-spr-color rounded-md  dark:text-gray-300 dark:border-spr-color focus:border-spr-color focus:ring-pr-colorfocus:ring-opacity-40 dark:focus:border-spr-color focus:outline-none focus:ring" placeholder="Message"></textarea>
                  </div>

                  <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide capitalize transform  rounded-md transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80 ">
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
