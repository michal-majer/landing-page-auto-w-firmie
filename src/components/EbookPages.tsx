import React from "react";
import Page12 from '../data/pages/12.png';
import Page21 from '../data/pages/21-2.png';
import Diagram from '../data/pages/diagram.png';
import { Questions } from "./Questions";

export function EbookPages() {
    return (
        <div className="py-12 sm:py-16">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white-950 sm:text-5xl">
                    Treści w poradniku (e-book) 👨🏻‍💻
                </p>

                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

                    {/* 1 Card */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Omówienie wszystkich etapów
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Zakup, ubezpieczenie, koszty, wykup czy darowizna. Kazdy z tych aspektów został opisany. Dodatkowe wszystko przeliczysz w kalkualtorze!
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-5 bottom-0 top-10 overflow-hidden rounded-t-[6cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src={Page12.src}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>

                    <div className="relative max-lg:row-start-1">
                        {/* 2 Card */}
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Przykłady obliczeń
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Krok - po - kroku, jak wyliczane są odliczenia podatkowe.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src={Page21.src}
                                    alt=""
                                />
                            </div>

                        </div>


                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>

                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className=" text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Odpowiedzi na liczne Twoje pytania:</p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <Questions />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Konsekwencje wykupu auta
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Zilustrowane przy uzyciu czytelnych diagramów
                                </p>
                            </div>

                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-5 bottom-0 top-10 overflow-hidden rounded-t-[6cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src={Diagram.src}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}