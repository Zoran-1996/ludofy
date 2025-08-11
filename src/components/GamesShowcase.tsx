'use client'

import { useRef } from "react"
import Image from "next/image"

import CardGameAdvanced from "./CardGameAdvanced"
import GameHighlight from "./GameHighlight"

import { useGSAP } from "@gsap/react"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"

import { games } from "@/data/gamesData"
import { fadeIn } from "@/animations/gsap/fadeIn"
import { fadeInFromBottom } from "@/animations/gsap/fadeInFromBottom"

export default function GamesShowcase() {
    const gamesShowcaseHeadingIco = useRef(null)
    const gamesShowcaseHeading = useRef(null)
    const gamesShowcaseText = useRef(null)

    useGSAP(() => {
        fadeInFromLeft(gamesShowcaseHeadingIco, 100)
        fadeIn(gamesShowcaseHeading)
        fadeInFromBottom(gamesShowcaseText)
    }, [])

    return (
        <section className="GamesShowcase overflow-x-hidden">
            <div className="text-center max-w-245 px-5 my-12.5 md:my-17.5 w-full mx-auto flex justify-center flex-col">
                <div aria-hidden="true" ref={gamesShowcaseHeadingIco} className="w-22.5 h-27 lg:w-41.25 lg:h-49.5 relative mb-10 lg:mb-3 mx-auto lg:ml-auto lg:mr-[initial]">
                    <Image
                        src="/icons/bookshelf.svg"
                        fill
                        alt=""
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <h2 ref={gamesShowcaseHeading} className="font-normal mb-6 lg:mb-10.75">Step into the <span className="highlight-text">Game</span></h2>
                <p ref={gamesShowcaseText} className="lg:text-xl">Step into a world built for touch, speed, and strategy. From pulse-pounding shooters to laid-back puzzle adventures, our lineup delivers immersive gameplay made for mobile. Whether you&#39;re chasing leaderboards or just vibing with a cat in a neon alley, there&#39;s a game here for every kind of player.</p>
            </div>
            <div className="flex flex-col gap-7.5 md:gap-12.5 lg:gap-25">
                {games.map((game) => (
                    <GameHighlight key={game.id} bgAsset={game.bgAsset} reversed={game.reversed}>
                        <CardGameAdvanced {...game} />
                    </GameHighlight>
                ))}
            </div>
        </section>
    )
}