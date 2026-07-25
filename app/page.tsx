import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import BusinessGrid from "@/components/Business/BusinessGrid";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <Hero />

      <Banner />

      <About />

      <BusinessGrid />

    </main>
  );
}