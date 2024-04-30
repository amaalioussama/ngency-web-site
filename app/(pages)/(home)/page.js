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
      <Hero />
      <About />
      <Features />
      <Services />
      <Portfolio />
      <Blogs />
      <Testimonials />
      <Contact />
    </main>
  );
}
