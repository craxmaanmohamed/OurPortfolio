import React, { createContext, useState, useEffect } from 'react';
import blogData from './mockBlogData.json'; // Adjust the path if necessary

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBlogs(blogData);
    }, 1000);
  }, []);

  return (
    <BlogContext.Provider value={{ blogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
