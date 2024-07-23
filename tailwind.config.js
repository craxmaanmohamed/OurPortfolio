/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage: {
      'pr-sectionB1':" url(/images/lineB.jpg)",
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "AboutBackround":" linear-gradient(  #000000ac,#2babda75) ,url(/images/AboutBgImg.jpg)",
        "ServiceBackround":" linear-gradient(  #000000ac,#2babda75) ,url(/images/blogImg1.jpg)",
        "BlogBgImage":" linear-gradient(  #000000ac,#2babda75) ,url(/images/BlogBgImage.jpg)",
        "contactBgImage":" linear-gradient(  #000000ac,#2babda75) ,url(/images/contactBgImage.jpg)"


    },
    colors:{
      'pr-color':'rgb(23, 155, 215, 1)',
      'Gold-color':'rgb(225, 215, 0)',
      'spr-color':'rgb(0, 44, 63, 0.97)',
      'whitee':'rgb(253, 253, 253)'

  
    }
  },
  },
  
  plugins: [],
}