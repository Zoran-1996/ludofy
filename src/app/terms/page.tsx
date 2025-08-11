import RTE from "@/components/RTE"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ludofy | Terms",
}

export default function Terms() {
    return (
        <>
            <RTE title="Terms & Conditions">
                <h2>Terms & Conditions Disclaimer</h2>
                <p>This page offers a general overview of Terms & Conditions and should not be relied upon as legal advice. Since the specific terms you need depend on your business model, services, and location, it’s essential to seek professional legal guidance to create Terms & Conditions tailored to your circumstances. This ensures your document is both legally sound and effective.</p>
                <h2>Understanding Terms & Conditions</h2>
                <p>Terms & Conditions (often abbreviated as T&C) are a set of binding rules established by you as the website or business owner. They define how visitors and customers may interact with your site, outlining the rights and responsibilities of both parties. These terms create the legal framework that governs user behavior and the relationship between your business and its audience.</p>
                <h2>Why Terms & Conditions Matter</h2>
                <p>Every website has unique needs based on the services or products it offers. For example, an e-commerce platform will require different Terms & Conditions than a simple informational site. Properly drafted T&C help protect you from legal risks, clarify your policies on payments, warranties, account management, intellectual property, and more. Because laws vary across regions, local legal advice is crucial for crafting terms that truly safeguard your interests.</p>
                <p>To learn more about this, check out our article “<a href="#" aria-label="Read more about Creating a Terms and Conditions Policy" target="_blank" rel="noopener noreferrer">Creating a Terms and Conditions Policy</a>”.</p>
            </RTE>
        </>
    )
}