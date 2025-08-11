'use client'

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

import { CareerCardProps } from "@/types/careerCardInterface"

export default function CareerCard({ id, asset, role, location, description, delay = 0 }: CareerCardProps) {
    const cardRef = useRef(null)

    useGSAP(() => {
        if (!cardRef.current) return

        gsap.from(cardRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            delay, 
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 90%",
            },
        })
    }, [delay])

    return (
        <div ref={cardRef} className="CareerCard bg-white rounded-[20px] p-7.5 transition-shadow duration-200 ease lg:max-w-100 lg:w-full hover:main-shadow">
            <div aria-hidden="true" className="relative w-10.5 h-15 mb-5 md:w-15.5 md:h-22">
                <Image
                    src={asset}
                    fill
                    alt=""
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="mb-5 md:mb-10">
                <h3>{role}</h3>
                <p>{location}</p>
            </div>
            <p>{description}</p>
            <Link aria-label={`Apply for ${role} position in ${location}`} className="btn-dark mt-7.5" href={`/careers/${id}`}>
                Apply
            </Link>
        </div>
    )
}
