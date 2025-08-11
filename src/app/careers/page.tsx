import JobOpenings from "@/components/JobOpenings"
import ShowcaseSection from "@/components/ShowcaseSection"
import SubmitCVModal from "@/components/SubmitCVModal"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ludofy | Careers",
}

export default function Careers() {
    return (
        <>
            <ShowcaseSection
                title="Bring Your Skills. Build What’s Next."
                subtitle="Careers"
                description={
                    <>
                        <p>At Ludofy, our games are powered by bold ideas, sharp design, and cutting-edge tech — all made possible by a team that never settles for average.</p>
                    </>
                }
                background="/images/rand-section-asset-v2.webp"
                bottomContent={<JobOpenings />}
            />
            <SubmitCVModal />
        </>
    )
}