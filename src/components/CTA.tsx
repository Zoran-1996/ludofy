import Image from "next/image"
import Link from "next/link"

import { CTAProps } from "@/types/CTAInterface"

export default function CTA({ heading, text, btnLabel, btnHref, bgAsset }: CTAProps) {
    return (
        <section>
            <div className="CTA wrapper px-5 py-20 relative text-center text-white after:absolute after:bg-electric-violet/80 after:top-0 after:left-0 after:w-full after:h-full lg:p-30">
                <div className="relative z-5">
                    <h2 className="mb-2.5 font-normal">{heading}</h2>
                    <p className="text-base md:text-xl">{text}</p>
                    <Link aria-label="Check open positions" className="btn-light mt-5 md:mt-7.5" href={btnHref}>{btnLabel}</Link>
                </div>
                <Image
                    aria-hidden="true"
                    src={bgAsset}
                    fill
                    alt=""
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
        </section>
    )
}