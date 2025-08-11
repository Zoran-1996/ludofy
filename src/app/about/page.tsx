import AboutCompanySection from "@/components/AboutCompanySection"
import CTA from "@/components/CTA"
import Employees from "@/components/Employees"
import ShowcaseSection from "@/components/ShowcaseSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ludofy | About",
}

export default function About() {
    return (
        <>
            <ShowcaseSection
                title="Crafted for Fun"
                subtitle="About"
                description={
                    <>
                        <p>Founded in 2020, Ludofy exists to push the boundaries of mobile entertainment. We create bold, interactive experiences that connect players through design, storytelling, and innovation.</p>
                        <p>We’re more than just a studio — we’re a team of creators, thinkers, and dreamers who live and breathe games. From concept to launch, every title we build reflects our passion for quality, creativity, and player-first design.</p>
                        <p>Our journey began with a simple goal: make mobile games that people love to play — again and again. What sets us apart is our relentless focus on gameplay feel, attention to detail, and building communities around every experience we release.</p>
                    </>
                }
                background="/images/rand-section-asset-v3.webp"
                bottomContent={<AboutCompanySection />}
            />
            <Employees />
            <CTA
                heading="Join Our Team"
                text="It takes the world's best talent to change the game."
                btnLabel="Explore Opportunities"
                btnHref="/careers"
                bgAsset="/images/galaxy-asset.webp"
            />
        </>
    )
}