import RTE from "@/components/RTE"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ludofy | Privacy Policy",
}

export default function PrivacyPolicy() {
    return (
        <>
            <RTE title="Privacy Policy">
                <h2>Privacy Policy Disclaimer</h2>
                <p>This page provides a general overview of privacy policies and should not be interpreted as legal advice. Since privacy requirements vary greatly depending on your business type and jurisdiction, it’s essential to create a Privacy Policy tailored to your specific practices and legal obligations. We recommend consulting a qualified legal expert to help you draft a policy that fully complies with applicable laws.</p>
                <h2>What Is a Privacy Policy?</h2>
                <p>A Privacy Policy is a formal statement that explains how a website or business collects, uses, shares, and protects the personal data of its visitors and customers. It typically outlines the types of information gathered, the reasons for collecting that data, and the security measures in place to safeguard privacy. This transparency helps build trust by assuring users that their information is handled responsibly.</p>
                <h2>Why a Privacy Policy Is Important</h2>
                <p>Privacy laws differ across regions, and businesses must ensure their policies meet the legal requirements relevant to their operations and audience. A well-crafted Privacy Policy not only helps you stay compliant but also informs your users of their rights and how they can exercise them. This includes how you handle sensitive data, how you share information with third parties, and special considerations like the protection of minors’ information.</p>
                <p>To learn more about this, check out our article “<a href="#" aria-label="Read more about creating Privacy Policy" target="_blank" rel="noopener noreferrer">Creating a Privacy Policy</a>”.</p>
            </RTE>
        </>
    )
}