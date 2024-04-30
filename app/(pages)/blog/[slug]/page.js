import dynamic from "next/dynamic";

// Modules
const Hero = dynamic(() => import("@/modules/Blog/Hero"), {
    loading: () => <p></p>,
  }),
  Body = dynamic(() => import("@/modules/Blog/Body"), {
    loading: () => <p></p>,
  });

export default function Blog() {
  return (
    <main>
      <Hero />
      <Body />
    </main>
  );
}
