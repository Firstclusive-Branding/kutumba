// src/app/page.js
"use client";

import About from "@/components/About";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <About />
    </main>
  );
}
