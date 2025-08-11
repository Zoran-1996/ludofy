import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger)

export const fadeInFromLeft = (targetRef: RefObject<HTMLElement | null>, x: number | string = -100): (() => void) | void => {
    if (!targetRef?.current) return

    const animation = gsap.from(targetRef.current, {
        x,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: targetRef.current,
            start: "top 90%",
        },
    })

    return () => {
        animation.scrollTrigger?.kill()
        animation.kill()
    }
}
