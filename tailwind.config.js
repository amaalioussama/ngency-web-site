/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      boxShadow: {
        'left-lg': '10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)', // Define a large shadow on the left side
        
      },
      colors :{
        mediumBlue: "#5582C2",
        mediumpink : "#BB549B" ,
        meduimwhite : "#FAFAFA",
        costumgray : "#2A2A2A",
        darkpink : "#BB549B"
         },
      fontFamily: {
 zeyda :['zeyda'],
 zindsong:['zindsong']

   
   
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        extrabold: '999',
        black: '900',
      },
    },
  },
  plugins: [],
};
