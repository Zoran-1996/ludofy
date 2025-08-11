'use client'

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

import { headerLinks } from "@/data/headerData"

import Logo from "./Logo"

import { useFocusTrap } from "@/hooks/useFocusTrap"

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false)
    const pathname = usePathname()

    const [scrollDirection, setScrollDirection] = useState('up')
    const [lastScrollY, setLastScrollY] = useState(0)

    const containerRef = useRef<HTMLDivElement | null>(null)
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
    const hamburgerRef = useRef<HTMLButtonElement | null>(null)

    useFocusTrap(containerRef, activeMenu, firstLinkRef, () => setActiveMenu(false))

    useEffect(() => {
        setActiveMenu(false)
    }, [pathname])

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 250) {
                setScrollDirection('down')
            } else {
                setScrollDirection('up')
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <header className="Header fixed z-60 top-0 left-0 w-full py-3.75 lg:static lg:w-[initial] lg:py-10">
            <div ref={containerRef} className={`wrapper px-5 xl:px-0 flex justify-between transition-opacity duration-300 ease-in-out items-center ${scrollDirection === 'down' ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
                <Logo />
                <nav id="main-navigation" aria-label="Main navigation" className={`${activeMenu ? 'block' : 'hidden'} text-white bg-main-clr-dark fixed top-0 left-0 w-full h-full z-10 lg:block lg:static lg:bg-transparent lg:w-[initial] lg:h-[initial] lg:text-main-clr-dark`}>
                    <ul className="flex flex-col text-center h-full gap-7.5 overflow-auto py-25 px-5 lg:h-[initial] lg:text-left lg:p-0 lg:flex-row">
                        {headerLinks.map((link, index) => {
                            const isActive = pathname === link.href

                            return (
                                <li key={link.id}>
                                    <Link ref={index === 0 ? firstLinkRef : null} href={link.href} className={`${isActive ? 'text-electric-violet' : ''} text-3xl font-normal transition-colors ease-in-out duration-250 hover:text-electric-violet lg:text-sm lg:font-bold`}>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <button
                    ref={hamburgerRef}
                    aria-label="Toggle menu"
                    aria-expanded={activeMenu}
                    aria-controls="main-navigation"
                    onClick={() => setActiveMenu(!activeMenu)}
                    className={`hamburger ${activeMenu ? 'active-menu' : ''} relative z-11 lg:hidden`}
                >
                    <div className={`${activeMenu ? 'transform-[rotate(-45deg)]' : ''}`}>
                        <span className={`${activeMenu ? 'transform-[rotate(-90deg)_translateX(4px)] origin-right' : ''}`}></span>
                        <span></span>
                        <span className={`${activeMenu ? 'transform-[rotate(-90deg)_translateX(-4px)] origin-left' : ''}`}></span>
                    </div>
                </button>
            </div>
        </header>
    )
}