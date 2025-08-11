import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger)

export const scrollBgShift = (targetRef: RefObject<HTMLElement | null>): (() => void) | void => {
    if (!targetRef?.current) return

    const animation = gsap.to(targetRef.current, {
        backgroundPositionX: '-400px',
        ease: 'none',
        scrollTrigger: {
            trigger: targetRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    return () => {
        animation.scrollTrigger?.kill()
        animation.kill()
    }
}
