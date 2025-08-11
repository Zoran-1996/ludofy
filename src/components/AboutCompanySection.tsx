'use client'

import Image from "next/image"
import { useRef } from "react"

import InformationCard from "./InformationCard"

import { useGSAP } from "@gsap/react"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"
import { fadeInFromBottom } from "@/animations/gsap/fadeInFromBottom"

export default function AboutCompanySection() {
    const aboutCompanyHeadingRef = useRef(null)
    const aboutCompanyLocationRef = useRef(null)
    const aboutCompanyRightPartAssetRef = useRef(null)
    const aboutCompanyRightPartTextRef = useRef(null)
    const aboutCompanyLeftPartAssetRef = useRef(null)

    useGSAP(() => {
        fadeInFromLeft(aboutCompanyHeadingRef)
        fadeInFromLeft(aboutCompanyLocationRef)
        fadeInFromLeft(aboutCompanyRightPartAssetRef)
        fadeInFromLeft(aboutCompanyRightPartTextRef)
        fadeInFromBottom(aboutCompanyLeftPartAssetRef)
    }, [])

    return (
        <section className="AboutCompanySection relative flex flex-col lg:max-w-[90%] lg:mb-15 lg:w-full lg:mx-auto lg:relative lg:z-3 lg:-mt-57.5 lg:min-h-180 lg:flex-row xl:max-w-[80%]">
            <div className="bg-zumthor flex-1 py-10 px-5 relative lg:py-18.75 lg:pb-50">
                <div className="max-w-97.5 w-full mx-auto flex flex-col items-center lg:items-start">
                    <h2 ref={aboutCompanyHeadingRef} className="mb-7.5 md:mb-10">Key Highlights</h2>
                    <div className="flex flex-wrap gap-6.25 mb-10 *:flex-grow *:w-[calc((100%-50px)/2)] lg:mb-0">
                        <InformationCard
                            infoLabel="Team Members"
                            infoNumber="40"
                        />
                        <InformationCard
                            infoLabel="Years of Experience"
                            infoNumber="5"
                        />
                        <InformationCard
                            infoLabel="Growth Rate"
                            infoNumber="125%"
                        />
                    </div>
                    <div aria-hidden="true" ref={aboutCompanyLeftPartAssetRef} className="relative h-27.25 w-27.25 mx-auto lg:absolute lg:w-42.5 lg:h-42.5 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-bottom-15">
                        <Image
                            src="/icons/wooden-sign.svg"
                            fill
                            alt=""
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="bg-electric-violet text-white flex-1 py-10 px-5 lg:py-18.75">
                <div className="max-w-[80%] lg:max-w-97.5 w-full mx-auto">
                    <h2 ref={aboutCompanyLocationRef} className="mb-5 md:mb-7.5">Made in San Francisco</h2>
                    <div aria-hidden="true" ref={aboutCompanyRightPartAssetRef} className="relative h-41.5 w-full rounded-3xl mb-5 lg:h-58 lg:mb-12.5">
                        <Image
                            className="rounded-[10px]"
                            src="/images/rand-section-asset-v2.webp"
                            fill
                            alt=""
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <p ref={aboutCompanyRightPartTextRef} className="fade-element">Our studio calls San Francisco home — a city at the crossroads of creativity and technology. It’s where we dream up, build, and launch the mobile experiences we love to play (and replay).</p>
                </div>
            </div>
        </section>
    )
}