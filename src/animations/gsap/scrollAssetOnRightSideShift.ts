import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger)

export const scrollAssetOnRightSideShift = (targetRef: RefObject<HTMLElement | null>): (() => void) | void => {
    if (!targetRef?.current) return

    const animation = gsap.to(targetRef.current, {
        x: '-5px',
        ease: 'none',
        xPercent: -1,
        scrollTrigger: {
            trigger: targetRef.current,
            start: "top bottom",
            end: "bottom+=1000 top",
            scrub: 1,
        },
    })

    return () => {
        animation.scrollTrigger?.kill()
        animation.kill()
    }
}
