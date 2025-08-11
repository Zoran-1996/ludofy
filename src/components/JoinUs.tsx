'use client'

import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef } from "react"

import { useGSAP } from "@gsap/react"

import { scrollAssetOnRightSideShift } from "@/animations/gsap/scrollAssetOnRightSideShift"
import { fadeIn } from "@/animations/gsap/fadeIn"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"

export default function JoinUs() {
    const joinUsSubHeading = useRef(null)
    const joinUsHeading = useRef(null)
    const joinUsAsset = useRef(null)
    const joinUsLink = useRef(null)
    const joinUsSideAsset = useRef(null)

    useEffect(() => {
        scrollAssetOnRightSideShift(joinUsSideAsset)
    }, [])

    useGSAP(() => {
        fadeIn(joinUsSubHeading)
        fadeIn(joinUsHeading)
        fadeIn(joinUsLink)
        fadeInFromLeft(joinUsAsset)
    }, [])

    return (
        <section className="JoinUs relative py-15 overflow-hidden xl:py-30">
            <div className="relative z-2">
                <div className="text-center mx-auto max-w-245 px-5 w-full">
                    <span ref={joinUsSubHeading} className="font-bold block mb-4 lg:text-2xl lg:mb-5">Ludofy is Hiring!</span>
                    <h2 ref={joinUsHeading} className="font-normal mb-6.25 lg:mb-7.5">Join a Crew That Creates the <span className="highlight-text">Future of Mobile Gaming.</span></h2>
                    <div aria-hidden="true" ref={joinUsAsset} className="h-37.5 mx-auto mb-7.5 relative rounded-3xl md:h-100">
                        <Image
                            className="rounded-3xl"
                            src="/images/rand-section-asset.webp"
                            fill
                            alt=""
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <Link ref={joinUsLink} className="btn-dark w-full md:w-auto" href="/careers">View Open Positions</Link>
                </div>
            </div>
        </section>
    )
}