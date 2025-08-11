import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger)

export const fadeIn = (targetRef: RefObject<HTMLElement | null>): (() => void) | void => {
    if (!targetRef?.current) return

    const animation = gsap.from(targetRef.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: targetRef.current,
            start: 'top 90%',
            end: 'bottom top',
        },
        ease: 'power1.inOut'
    })

    return () => {
        animation.scrollTrigger?.kill()
        animation.kill()
    }
}
