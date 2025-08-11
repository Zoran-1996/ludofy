import Link from "next/link"

import NewsletterForm from "./NewsletterForm"

export default function NewsletterComponent() {
    return (
        <section className="NewsletterComponent relative min-h-225 py-25 overflow-hidden after:absolute after:bg-electric-violet/80 after:top-0 after:left-0 after:w-full after:h-125 after:lg:h-225 lg:py-37.5">
            <div className="wrapper px-5 relative z-2 xl:px-0">
                <div className="text-white text-center max-w-200 w-full mb-20 lg:mb-32.5 lg:text-left">
                    <span className="inline-block font-bold mb-3 md:text-2xl md:mb-5">About Ludofy</span>
                    <h2 className="mb-5 md:mb-10">Innovating Mobile Entertainment for Players Everywhere</h2>
                    <Link className="btn-light" href="/about">Explore More</Link>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row">
                    <NewsletterForm />
                </div>
            </div>
            <div aria-hidden="true" className="absolute top-0 left-0 w-full h-125 bg-[url('/images/galaxy-asset.webp')] bg-no-repeat bg-fixed bg-center bg-cover lg:h-225"></div>
        </section>
    )
}