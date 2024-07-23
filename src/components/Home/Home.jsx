import React from 'react'
import { FcAbout } from "react-icons/fc";
import { IoMdTimer } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { MdEmojiTransportation } from "react-icons/md";
import { GrBlockQuote } from "react-icons/gr";
import { BiSolidLike } from "react-icons/bi";
import { RiCodeView } from "react-icons/ri";
import { GrDomain } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
export default function Home() {
  return (
    <>
      {/* herow section start*/}
      <div class="flex flex-wrap bg-pr-sectionB1 bg-cover p-5 bg-center ">

        <div class="sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-6xl font-bold text-spr-color">Cab oo Ku cab <span class="text-pr-color">Caafi</span> Caafimaad</h1>
                <div class="w-20 h-2 bg-pr-color my-4"></div>
                <p class="text-xl mb-10 text-spr-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                <button class="transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80 focus:opacity-80 hover:text-white hover:bg-transparent border-2 text-white text-2xl font-medium px-4 py-2 rounded shadow">Contac Us</button>
              </div>


            </header>
          </div>
        </div>
       <img className=" object-cover sm:h-screen sm:w-4/12"  src="/images/sectionimg.png" alt="" />
     
      </div>

      {/* about section start */}
      <section class="py-10  bg-gray-100 sm:py-16 lg:py-24">

        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <img width={100} height={100} class="w-full rounded-md" src='/images/aboutus.jpg' alt="" />

              <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div class="overflow-hidden bg-white rounded">
                  <div class="px-10 py-6">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-3xl">100%</p>
                      <p class="pl-6 text-x font-medium text-black sm:text-lg">Safe water supply <br />to all Somali local </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <FcAbout class="w-8 h-8 bg-white" />
              </div>
              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">waa kuma Caafi</h2>
              <p class="mt-6 mb-10 text-lg leading-relaxed text-gray-600">Shirkadda biyaha CAAFI waxaa la aasaasay sanadkii 1999 waxaana lagu aasaasay caasimadda dalka ee magalada Muqdisho. Xarunta ugu wayn ee shirkadda waxay ku taalaa magaalada Muqclisho..</p>
              <a href="#" title="" class="transition-all duration-500 bg-gradient-to-r text-white from-pr-color to-spr-color hover:opacity-80 focus:opacity-80 hover:text-white hover:bg-transparent border-2  hotext-white text-2xl font-medium px-4 py-2 rounded shadow" role="button"> Learn more </a>
            </div>
          </div>
        </div>
      </section >

      {/* Our servicess */}

      <section id="features" class="container mx-auto px-4 space-y-6 bg-white py-8 md:py-12 lg:py-20">

<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

    <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>

    <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        The product can personalize user experiences by understanding individual preferences and tailoring
        recommendations or content based on user behavior and historical data.
    </p>

</div>

<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">


    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <MdDesignServices  class="flex-shrink-0 w-12 h-12 text-pr-color"/>

            <div class="space-y-2">
                <h3 class="font-bold">Components</h3>
                <p class="text-sm text-muted-foreground">UI components built using Radix UI and styled with Tailwind
                    CSS.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <RiCodeView  class="flex-shrink-0 w-12 h-12 text-pr-color"/>

            <div class="space-y-2">
                <h3 class="font-bold">Authentication</h3>
                <p class="text-sm text-muted-foreground">Authentication using NextAuth.js and middlewares.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <GrDomain  class="flex-shrink-0 w-12 h-12 text-pr-color"/>

            <div class="space-y-2">
                <h3 class="font-bold">Subscriptions</h3>
                <p class="text-sm text-muted-foreground">Free and paid subscriptions using Stripe.</p>
            </div>
        </div>
    </div>

</div>

</section>


      {/* Impact Section */}

      <section class="py-10 bg-gradient-to-r text-white from-pr-color to-spr-color sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <IoMdTimer  class="flex-shrink-0 w-12 h-12 text-pr-color"/>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">25+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <RiTeamLine class="flex-shrink-0 w-12 h-12 text-pr-color" />
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">100+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Team members</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <MdEmojiTransportation class="flex-shrink-0 w-12 h-12 text-pr-color"/>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">23+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Transport</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                <div class="px-4 py-6">
                    <div class="flex items-start">
                        <BiSolidLike class="flex-shrink-0 w-12 h-12 text-pr-color"/>
                        <div class="ml-4">
                            <h4 class="text-4xl font-bold text-gray-900">250k+</h4>
                            <p class="mt-1.5 text-lg font-medium leading-tight text-gray-500">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* what our claints said about us */}

<section id="testimonials" aria-label="What our customers are saying" class="bg-pr-sectionB1 bg-cover bg-center  py-8 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
      </div>
      <ul role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <GrBlockQuote width="105" height="78" class="absolute left-28 top-8 text-9xl fill-slate-100"/>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">I love the fitness apparel and gear I purchased from
                    this site. The quality is exceptional and the prices are unbeatable.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Ahmed iise</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img width={100} height={100} alt="" class="h-14 w-14 object-cover" src="/images/person3.jpg"/>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <GrBlockQuote width="105" height="78" class="absolute left-28 top-8 text-9xl fill-slate-100"/>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">As a professional athlete, I rely on high-performance
                    gear for my training. This site offers a great selection of products.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Sahal Khaalid</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img width={100} height={100} alt="" class="h-14 w-14 object-cover" src="/images/person2.jpg"/>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
        <li>
          <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
            <li>
              <figure class="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
              <GrBlockQuote width="105" height="78" class="absolute left-28 top-8 text-9xl fill-slate-100"/>
                <blockquote class="relative">
                  <p class="text-lg tracking-tight text-slate-900">The fitness apparel I bought here fits perfectly and
                    feels amazing. this store to anyone looking for quality gear.</p>
                </blockquote>
                <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div class="font-display text-base text-slate-900">Faarah cabdi</div>
                  </div>
                  <div class="overflow-hidden rounded-full bg-slate-50">
                    <img width={100} height={100} alt="" class="h-14 w-14 object-cover" src="/images/person1.jpg"/>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
    </>
  )
}
