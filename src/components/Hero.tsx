'use client'

import Image from "next/image"
import { useRef, useEffect } from "react"

import CardGameSimple from "./CardGameSimple"

import { highlightedGames } from "@/data/highlightedHeroGamesData"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { scrollBgShift } from "@/animations/gsap/scrollBgShift"

export default function Hero() {
    const bgHeroAssetRef = useRef(null)

    useEffect(() => {
        scrollBgShift(bgHeroAssetRef)
    }, [])

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(max-width: 1023px)", () => {
            gsap.fromTo('.hero-text', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 2
            })

            gsap.from('.card-ico-mobile', {
                x: 80,
                opacity: 0,
                duration: 1.2,
                delay: 0.4,
                stagger: 0.8,
                ease: 'power1.out',
            })

            gsap.from('.CardGameSimple', {
                y: 100,
                opacity: 0,
                duration: 1.4,
                ease: 'power1.out',
                stagger: 0.2,
            })
        })

        mm.add("(min-width: 1024px)", () => {
            gsap.fromTo('.hero-text', {
                opacity: 0,
            }, {
                opacity: 1,
                delay: 0.4,
                duration: 2
            })

            gsap.from('#cat', {
                y: -120,
                opacity: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })

            gsap.from('#crossed-swords', {
                y: 120,
                opacity: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })

            gsap.from('.CardGameSimple', {
                x: -200,
                opacity: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
        })

        return () => mm.revert()
    }, [])

    return (
        <section id="Hero" className="Hero relative mt-12.5 xl:pt-50 overflow-x-hidden">
            <div className="overflow-hidden px-5 mb-10">
                <div className="text-center max-w-245 w-full mx-auto">
                    <h1 className="hero-text mb-6 lg:mb-7">Built for <span className="hero-text highlight-text">Playmakers</span></h1>
                    <span className="hero-text xl:text-3xl">Redefining Mobile Gaming, One Tap at a Time</span>
                </div>
                <div className="flex flex-col py-10 justify-center items-center max-w-350 mx-auto gap-7.5 *:w-full *:max-w-75 lg:flex-row lg:flex-wrap lg:justify-between xl:gap-25">
                    {highlightedGames.map(game => (
                        <div className="first:xl:transform first:xl:absolute first:xl:top-0 first:xl:left-1/2 first:xl:-translate-x-1/2" key={game.id}>
                            <CardGameSimple
                                asset={game.asset}
                                assetAlt={game.assetAlt}
                                heading={game.heading}
                                text={game.text}
                                hasIcoAsset={game.hasIcoAsset}
                                icoAsset={game.icoAsset}
                                icoAssetPosition={game.icoAssetPosition}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <div aria-hidden="true" id="crossed-swords" className="hidden absolute right-[11%] top-7.5 h-37.5 w-37.5 xl:block 2xl:right-[15%]">
                        <Image
                            src="/icons/crossed-swords.svg"
                            fill
                            alt=""
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <div aria-hidden="true" id="cat" className="hidden absolute left-[9%] top-5 h-37.5 w-37.5 xl:block 2xl:left-[18%]">
                        <Image
                            src="/icons/cat.svg"
                            fill
                            alt=""
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                ref={bgHeroAssetRef}
                id="hero-bg-asset"
                className="relative w-[250%] max-h-262.5 bg-[url('/images/hero-asset.webp')] bg-no-repeat bg-cover h-[90vw] md:w-[120%] md:h-[70vw] lg:aspect-auto lg:h-[60vw]"
                style={{
                    backgroundPosition: 'center',
                }}
            ></div>
        </section>
    )
}