'use client'

import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(() => import("@/modules/Home/Hero"), {
    loading: () => <p></p>,
  }),
  About = dynamic(() => import("@/modules/Home/About"), {
    loading: () => <p></p>,
  }),
  Features = dynamic(() => import("@/modules/Home/Features"), {
    loading: () => <p></p>,
  }),
  Services = dynamic(() => import("@/modules/Home/Services"), {
    loading: () => <p></p>,
  }),
  Portfolio = dynamic(() => import("@/modules/Home/Portfolio"), {
    loading: () => <p></p>,
  }),
  Blogs = dynamic(() => import("@/modules/Home/Blogs"), {
    loading: () => <p></p>,
  }),
  Testimonials = dynamic(() => import("@/modules/Home/Testimonials"), {
    loading: () => <p></p>,
  }),
  Contact = dynamic(() => import("@/modules/Home/Contact"), {
    loading: () => <p></p>,
  });

export default function Home() {
  

  return (
    <main>
      <div className="overflow-hidden">
        <Hero />
      </div>
      <div className="overflow-hidden">
        <About />
      </div>
      <div className="overflow-hidden">
        <Features />
      </div>
      <div className="overflow-hidden">
        <Services />
      </div>
      <div className="overflow-hidden">
        <Portfolio />
      </div>
      <div className="overflow-hidden">
        <Blogs />
      </div>
      <div className="overflow-hidden">
        <Testimonials />
      </div>
      <div  className="overflow-hidden">
        <Contact />
      </div>
    </main>
  );
}
