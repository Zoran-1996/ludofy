'use client'

import { useRef } from 'react'

import { useGSAP } from "@gsap/react"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"

import { RTEProps } from '@/types/RTEInterface'

export default function RTE({ title, children }: RTEProps) {
    const RTEHeadingRef = useRef(null)

    useGSAP(() => {
        return fadeInFromLeft(RTEHeadingRef)
    }, [])

    return (
        <section className="RTE pt-23 md:pt-25.5 lg:pt-0">
            <div className="wrapper">
                <div className="bg-main-clr-dark px-5 py-10 text-white lg:p-30">
                    <h1 ref={RTEHeadingRef}>{title}</h1>
                </div>
                <div className="max-w-153 mx-auto w-full px-5 space-y-5 [&_a]:underline [&_a:hover]:opacity-50 [&_a]:transition-opacity [&_a]:duration-300 py-10 lg:py-20 lg:space-y-10">
                    {children}
                </div>
            </div>
        </section>
    )
}