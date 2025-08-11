'use client'

import Image from "next/image"
import { useRef } from "react"

import { useGSAP } from "@gsap/react"
import { fadeInFromLeft } from "@/animations/gsap/fadeInFromLeft"

import { CardGameAdvancedProps } from "@/types/cardGameAdvancedInterface"

export default function CardGameAdvanced({ gameIco, gameIcoAlt, heading, subheading, description, gameAsset, gameAssetAlt, appStoreLink, googlePlayLink }: CardGameAdvancedProps) {
    const cardGameAdvancedRef = useRef(null)

    useGSAP(() => {
        return fadeInFromLeft(cardGameAdvancedRef)
    }, [])

    return (
        <div ref={cardGameAdvancedRef} className="CardGameAdvanced bg-white rounded-[20px] mb-42.5 max-w-162.5 w-full flex flex-col items-center justify-between p-5 relative z-10 md:mb-0 md:flex-row md:py-12.5 md:px-12">
            <div className="flex flex-col gap-6.25 basis-[50%] lg:basis-[58%]">
                <div className="inline-flex gap-6 items-center">
                    <div className="w-22.5 h-22.5 rounded-3xl flex items-center justify-center bg-zumthor shrink-0">
                        <Image
                            className="rounded-3xl"
                            src={gameIco}
                            width={78}
                            height={78}
                            alt={gameIcoAlt}
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div>
                        <h5>{heading}</h5>
                        <p>{subheading}</p>
                    </div>
                </div>
                <p>{description}</p>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <a className="group" href={appStoreLink} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="transform transition-transform duration-200 ease-in-out will-change-transform group-hover:-translate-y-0.5"
                            src="/images/app-store-asset.webp"
                            width={145}
                            height={45}
                            alt="Download from the App Store"
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </a>
                    <a className="group" href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                        <Image
                            className="transform transition-transform duration-200 ease-in-out will-change-transform group-hover:-translate-y-0.5"
                            src="/images/google-play-asset.webp"
                            width={145}
                            height={45}
                            alt="Download from Google Play"
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </a>
                </div>
            </div>
            <div className="relative mt-10 -mb-47.5 md:mb-0 md:mt-0">
                <div aria-hidden="true" className="relative w-50 h-98.75 md:w-46.5 md:h-93">
                    <Image
                        className="relative z-1"
                        src="/images/mobile-wireframe-asset.webp"
                        fill
                        alt=""
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </div>
                <div className="absolute w-[90%] h-[96%] top-1/2 left-1/2 rounded-[20px] transform -translate-y-1/2 -translate-x-1/2">
                    <Image
                        className="rounded-[20px]"
                        src={gameAsset}
                        fill
                        alt={gameAssetAlt}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}