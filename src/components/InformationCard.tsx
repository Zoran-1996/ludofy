'use client'

import { InformationCardProps } from "@/types/informationCardInterface"

import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"

export default function InformationCard({ infoNumber, infoLabel }: InformationCardProps) {
    const informationCardRef = useRef(null)

    useGSAP(() => {
        return fadeInFromLeft(informationCardRef)
    }, [])

    return (
        <dl ref={informationCardRef} className="InformationCard fade-element bg-white w-full py-3.75 px-6.25 rounded-[20px] flex flex-col items-center text-center main-shadow md:p-7.5">
            <dt className="font-poppins font-bold text-4xl md:text-7xl">{infoNumber}</dt>
            <dd className="text-sm font-bold">{infoLabel}</dd>
        </dl>
    )
}