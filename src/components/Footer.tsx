import Logo from "./Logo"
import Link from "next/link"

import { footerLinksInternal, footerLinksExternal } from "@/data/footerData"

export default function Footer() {
    return (
        <footer className="Footer py-7.5">
            <div className="wrapper px-5 xl:px-0">
                <Logo />
                <p className="mt-5 text-xl mb-8 lg:text-3xl lg:mb-13">Crafting Exceptional Mobile Experiences</p>
                <div className="pt-8 border-t border-main-clr-dark lg:pt-13 lg:flex lg:justify-between">
                    <div className="mb-12">
                        <nav>
                            <h5 className="mb-3">Contact</h5>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a className="transition-opacity duration-200 ease-in-out hover:opacity-60" href="mailto:contact@ludofy.com">contact@ludofy.com</a>
                                </li>
                                <li>Phone: (415) 555-0123</li>
                                <li>123 Innovation Drive</li>
                                <li>San Francisco, CA 94107</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="grid grid-cols-2 gap-10 lg:gap-50 lg:flex-[0_1_554px]">
                        <div>
                            <nav>
                                <h5 className="mb-3">Menu</h5>
                                <ul className="flex flex-col gap-2">
                                    {footerLinksInternal.map(link => (
                                        <li key={link.id}>
                                            <Link className="transition-colors ease-in-out duration-300 hover:text-electric-violet" href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <nav>
                                <h5 className="mb-3">Social</h5>
                                <ul className="flex flex-col gap-2">
                                    {footerLinksExternal.map(link => (
                                        <li key={link.id}>
                                            <a href={link.href} className="transition-colors ease-in-out duration-300 hover:text-electric-violet" target="_blank" rel="noopener noreferrer">{link.label} <span className="sr-only">(opens in a new tab)</span></a>
                                        </li>
                                    ))}
                                </ul> 
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-sm mt-2.5 md:mt-4">© Ludofy — made with care and innovation, backed by Zoran.</p>
                </div>
            </div>
        </footer>
    )
}