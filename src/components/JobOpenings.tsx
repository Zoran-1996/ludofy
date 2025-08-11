'use client'

import { useRef } from "react"

import CareerCard from "./CareerCard"

import { useGSAP } from "@gsap/react"
import { fadeIn } from "@/animations/gsap/fadeIn"

import { careers } from "@/data/careersData"

export default function JobOpenings() {
    const jobOpeningsHeading = useRef(null)

    useGSAP(() => {
        fadeIn(jobOpeningsHeading)
    }, [])

    return (
        <div className="JobOpenings bg-electric-violet relative py-7.5 lg:max-w-[90%] lg:w-full lg:mx-auto lg:relative lg:z-3 lg:-mt-57.5 lg:pt-25 lg:bg-transparent lg:min-h-275 xl:max-w-[80%]">
            <h2 ref={jobOpeningsHeading} className="text-center text-white mb-7.5 max-w-200 mx-auto w-full lg:mb-40">Unlock Your Next Role</h2>
            <div className="px-5 grid grid-cols-1 gap-5 justify-items-center lg:gap-y-25 lg:gap-x-35 lg:grid-cols-2">
                {careers.map(({ id, asset, role, location, description }, index) => (
                    <CareerCard
                        key={id}
                        id={id}
                        asset={asset}
                        role={role}
                        location={location}
                        description={description}
                        delay={index * 0.2}
                    />
                ))}
            </div>
            <div aria-hidden="true" className="hidden absolute top-0 left-0 -z-1 bg-electric-violet w-full min-h-230 h-[77%] overflow-hidden lg:block"></div>
        </div>
    )
}