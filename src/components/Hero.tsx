import React from "react";
import { RainbowButton } from "./magicui/RainbowButton";
import BlurFade from "./magicui/BlurFade";

export function Hero() {
    return (
        <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:py-16">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="text-center">
                <BlurFade delay={0.25 * 2} inView>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
                    Zoptymalizuj zakup auta dla Twojej firmy
                </h1>
                </BlurFade>
                <BlurFade delay={0.25 * 3} inView>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                    Poradnik wraz z kalkulatorem o  zakupie, finansowaniu i sprzedaży firmowych pojazdów wraz z zaawansowanym kalkulatorem do analizy opłacalności różnych opcji!
                </p>
                </BlurFade>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href='https://app.easycart.pl/checkout/poradnik-b2b/auto-w-firmie' target='_blank' rel='noreferrer'>
                        <RainbowButton>Sprawdź, ile możesz zyskać! 💵 </RainbowButton>
                    </a>
                </div>
            </div>
        </div>
    )
}