import React, { useContext } from 'react';
import { BlogContext } from '../../BlogContext'; // Adjust the path if necessary
import { Link } from 'react-router-dom';

const BlogList = () => {
  const { blogs } = useContext(BlogContext);

  if (!blogs) {
    return <p>Loading...</p>;
  }

  return (
    <>
       <div className='bg-BlogBgImage rounded-b-3xl bg-cover bg-center h-72 flex justify-center items-center'>
        <h1 className=' text-white font-extrabold text-6xl md:text-8xl uppercase'>Blog List</h1>
      </div>

      {/* Blog List */}
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-end justify-between">
            <div class="flex-1 text-center lg:text-left">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">blog Lists</h2>
            </div>

          
        </div>
       
            <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {
          blogs.map(Data=>(
            <div class="overflow-hidden bg-white rounded shadow">

                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <img src={Data.thumbnail} alt={Data.title} class="object-cover w-full h-[230px]"/>
                        </a>

                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{Data.publishDate}</span>
                    <p class="mt-5 text-2xl font-semibold">

                        <a href="#" title="" class="text-black">{Data.title}</a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">  {Data.content.slice(0,350)}</p>
                    <Link 
                to={`/blog/${Data.id}`} 
                className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-pr-color transition-all duration-200 border-b-2 border-transparent hover:border-pr-color"
              >
                Read
                </Link>
                </div>
            </div>

           
))
}
            
        </div>

        

        {/* <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-5">
                    <div class="relative">
                        <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                            <Image width={100} height={100} class="object-cover w-full h-[230px]" src="/images/blogImg1.jpg" alt="" />
                        </a>

                    </div>
                    <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> june 09, 2024 </span>
                    <p class="mt-5 text-2xl font-semibold">
                        <a href="#" title="" class="text-black"> Biiyo galinta xaafadaha iyo suuqyada  </a>
                    </p>
                    <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-pr-color transition-all duration-200 border-b-2 border-transparent hover:border-pr-color  ">
                        Read More
                    </a>
                </div>
            </div>

           

            
        </div> */}

      
    </div>
</section>
    </>
  );
};

export default BlogList;
