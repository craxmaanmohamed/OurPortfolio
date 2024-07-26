import React from 'react'
import { FcAbout } from "react-icons/fc";
import { GrBlockQuote } from "react-icons/gr";
function AboutUs() {
  return (

 <>
    <div className='bg-AboutBackround rounded-b-3xl bg-cover bg-center h-72 flex justify-center items-center'>
    <h1 className=' text-white font-extrabold text-6xl md:text-8xl uppercase  '>About Us</h1>
  </div>
  {/* About start */}
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
              <p class="pl-6 text-x font-medium text-black sm:text-lg">highly skilled and  <br />dedicated professionals </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
        <FcAbout class="w-8 h-8 bg-white" />
      </div>
      <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">jeceeloow</h2>
      <p class="mt-6 mb-10 text-lg leading-relaxed text-gray-600"> Our development team is the backbone of our success. Comprised of highly skilled and dedicated professionals, we specialize in creating innovative and user-friendly web solutions tailored to meet the unique needs of our clients. We excel in web development, web redesign, and custom software development, ensuring each project is executed with precision and creativity. Our team stays ahead of industry trends, continuously learning and adapting to provide cutting-edge services. Collaboration and client satisfaction are at the core of our approach, as we work closely with you to bring your vision to life. Trust us to deliver exceptional digital solutions that drive results and help your business thrive online.</p>
    </div>
  </div>
</div>
</section >
  {/* About end */}

    {/* impact end */}

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
                    <img  alt="" class="h-14 w-14 object-cover" src="/images/person3.jpg"/>
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
                    <img alt="" class="h-14 w-14 object-cover" src="/images/person2.jpg"/>
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
                    <img  alt="" class="h-14 w-14 object-cover" src="/images/person1.jpg"/>
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

  );
}

export default AboutUs;