'use client'
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HeroVideo } from '../components/HeroVideo';
import { EbookPages } from '../components/EbookPages';
import { LoveWall } from '../components/LoveWall';
import { Blog } from '../components/Blog';
import { Footer } from '../components/Footer';
import Particles from '../components/magicui/Particles';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  useEffect(() => {
    window.addEventListener("message", (e) => { !!e.data.frameHeight && e.data.wallUuid === "auto-w-firmie" && (document.getElementById("auto-w-firmie")!.style.height = e.data.frameHeight); });
  });

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Analytics/>
      <Header />
      <Hero />
      <HeroVideo />
      <EbookPages />
      <LoveWall />
      <Blog />
      <Footer />

      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={20}
        color={'#ffffff'}
        refresh
      />
    </main>
  );
}