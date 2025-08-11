'use client'

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"

import { ShowcaseSectionProps } from "@/types/showcaseSectionInterface"

export default function ShowcaseSection({ title, subtitle, description, background, bottomContent }: ShowcaseSectionProps) {
    const showcaseSectionTextContainerRef = useRef(null)

    useGSAP(() => {
        return fadeInFromLeft(showcaseSectionTextContainerRef)
    }, [])

    return (
        <section className="ShowcaseSection">
            <div className="wrapper">
                <div 
                    className={`pt-28 pb-15 px-5 bg-fixed bg-no-repeat bg-cover relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-main-clr-dark/60 md:min-h-100 lg:py-30 lg:pb-87.5 lg:px-35 lg:min-h-200 `} 
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div ref={showcaseSectionTextContainerRef} className="text-white max-w-187.5 w-full relative z-2">
                        <span className="inline-block mb-2.5 lg:mb-5 lg:text-lg">{subtitle}</span>
                        <h1 className="mb-5">{title}</h1>
                        <div className="max-w-162.5 w-full flex flex-col items-start gap-5 lg:text-lg lg:gap-10">
                            {description}
                        </div>
                    </div>
                </div>
                {bottomContent}
            </div>
        </section>
    )
}