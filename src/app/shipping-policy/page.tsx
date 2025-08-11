import RTE from "@/components/RTE"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ludofy | Shipping Policy",
}

export default function ShippingPolicy() {
    return (
        <>
            <RTE title="Shipping Policy">
                <h2>Shipping Policy Disclaimer</h2>
                <p>This page provides a general overview of shipping policies and should not be considered legal advice. Because each business has unique shipping practices and operates under different regulations, it’s important to develop a shipping policy tailored to your specific needs. We recommend consulting with a legal professional to help you create a comprehensive and compliant Shipping Policy.</p>
                <h2>Understanding the Shipping Policy</h2>
                <p>A Shipping Policy is a legally binding document that outlines the relationship between your business and your customers concerning order fulfillment and delivery. It defines your responsibilities as a seller and addresses various scenarios that may arise during the shipping process, specifying what customers can expect in each case.</p>
                <h2>Why a Shipping Policy Matters</h2>
                <p>Having a clear Shipping Policy benefits both your business and your customers. It helps customers understand the expected timelines and procedures for receiving their orders, which builds trust and confidence in your service. Meanwhile, your business gains credibility and reduces potential misunderstandings or disputes about shipping terms, encouraging customers to shop with assurance.</p>
            </RTE>
        </>
    )
}