import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/About us/AboutUs';
import OurBlogs from './components/Our Blogs/OurBlogs';
import ContactUs from './components/Contact us/ContactUs';
import Footer from './components/Footer/Footer';
import { BlogProvider } from './BlogContext';
import BlogDetail from './components/Our Blogs/BlogDetail';
function App() {
  return (
    <BlogProvider>
<Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="OurBlogs" element={<OurBlogs />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
    </BlogProvider>
    
  );
}

export default App;
