'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-12 right-7 z-50 transition-opacity bg-main-clr-dark rounded-full p-2.5 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll to top"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
        >
            <Image
                aria-hidden="true"
                src="/icons/scroll-to-top.svg"
                width={30}
                height={30}
                alt=""
                style={{
                    objectFit: 'contain'
                }}
            />
        </button>
    )
}
