import dynamic from "next/dynamic";
import Hero from "@/components/Hero/Hero";

const Banner = dynamic(() => import("@/components/Banner/Banner"));
const About = dynamic(() => import("@/components/About/About"));
const BusinessGrid = dynamic(() => import("@/components/Business/BusinessGrid"));

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      <Hero />

      <About />
      <Banner />

      <BusinessGrid />

    </main>
  );
}