import React from 'react'
import { FaFacebookSquare ,FaInstagram} from "react-icons/fa";
export default function Footer() {
  return (
    <footer class="bg-black">
    <div class="container p-6 mx-auto">
      <div class="lg:flex md:flex justify-around">
        <div class="w-full -mx-6 lg:w-2/5">
          <div class="px-6">
            <a href="#">
              <img width={100} height={100}  class="w-auto h-7" src="/images/black logo.png" alt="" />
            </a>

            <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">our development team is the backbone of our success. Comprised of highly skilled and dedicated professionals,</p>
            <div class="flex mt-6 -mx-2">
              <a href="#"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Reddit">
                
                <FaFacebookSquare class="w-5 h-5 fill-current"/>
              </a>

              <a href="#"
                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Facebook">
                                  <FaInstagram class="w-5 h-5 fill-current"/>

              </a>

        
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-gray-700 uppercase dark:text-white">quick Links</h3>
          <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Home</a>
          <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About</a>
          <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact</a>
        </div>


        <div>
          <h3 class="text-gray-700 uppercase dark:text-white">Contact us</h3>
          <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">0000</span>
          <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"> info@ourport.so</span>
        </div>
      </div>

      <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

      <div>
        <p class="text-center text-gray-500 dark:text-gray-400">© Our Portflio 2024 - All rights reserved</p>
      </div>
    </div>
  </footer>
  )
}
