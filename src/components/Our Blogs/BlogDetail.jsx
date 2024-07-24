import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../../BlogContext'; // Adjust the path if necessary
import { data } from 'autoprefixer';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const { blogs } = useContext(BlogContext);
  
  const blog = blogs.find(blog => blog.id === parseInt(id, 10)); // Find the blog by ID

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
              <h1 class="text-5xl font-semibold py-4 text-pr-color"> Blog Details</h1>
        <img src={blog.thumbnail} alt="" className=' h-50vh  w-full' />
     
    <div class="max-w-3xl mx-auto ">
        <div
            class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">{blog.title}</h1>
                <p class="text-gray-700 text-xs mt-2"><strong>Author:</strong> {blog.author}</p>

                <p class="text-base leading-8 my-5">{blog.content} </p>
            </div>

        </div>
    </div>
</div>

   
    // <div>
    //   <h1>{blog.title}</h1>
    //   <img src={blog.thumbnail} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
    //   <p><strong>Author:</strong> {blog.author}</p>
    //   <p><strong>Published on:</strong> {blog.publishDate}</p>
    //   <p>{blog.content}</p>
    // </div>
  );
};

export default BlogDetail;
