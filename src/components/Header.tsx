import React from "react";
import { RainbowButton } from "./magicui/RainbowButton";
import BlurFade from "./magicui/BlurFade";
import Image from "next/image";
import Logo from '../data/logo.png'

export function Header() {
    return(
        <header className="fixed left-0 top-0 z-50 w-full h-[6rem] border-b opacity-1 backdrop-blur-[12px] ">
        <BlurFade delay={0.25} inView>
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 sticky">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Poradnik B2B</span>
                <Image
                  src={Logo}
                  alt="Poradnik B2B Logo"
                  width={150}
                />
              </a>
            </div>
            <a href='https://app.easycart.pl/checkout/poradnik-b2b/auto-w-firmie' target='_blank' rel='noreferrer'>
              <RainbowButton>Kup poradnik i kalkulator juz od 37zł 🛒</RainbowButton>
            </a>
          </nav>
        </BlurFade>
      </header>        
    )
}