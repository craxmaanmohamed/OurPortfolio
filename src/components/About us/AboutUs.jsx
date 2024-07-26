import React from 'react'
import { FcAbout } from "react-icons/fc";
import { GrBlockQuote } from "react-icons/gr";
function AboutUs() {
  return (

 <>




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