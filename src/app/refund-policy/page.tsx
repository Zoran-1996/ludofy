import RTE from "@/components/RTE"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ludofy | Refund Policy",
}

export default function RefundPolicy() {
    return (
        <>
            <RTE title="Refund Policy">
                <h2>Refund Policy Overview</h2>
                <p>This page offers a general overview of refund policies and is not intended as legal advice. Since each business operates under different circumstances and legal requirements, it’s important to create a refund policy that suits your specific needs. We recommend consulting a legal professional to ensure your policy complies with relevant laws and clearly outlines your terms.</p>
                <h2>Purpose of a Refund Policy</h2>
                <p>A refund policy serves as a formal agreement between you and your customers, defining how returns and refunds are handled. Many jurisdictions require online businesses to provide clear information about their refund and return processes to protect consumers and prevent disputes. Establishing transparent refund guidelines not only helps fulfill legal obligations but also fosters customer trust and reduces the risk of complaints.</p>
                <h2>What to Consider When Writing Your Refund Policy</h2>
                <p>When developing your refund policy, consider how long customers have to request a refund, whether refunds are issued in full or partially, and under what conditions refunds will be granted. It should also explain the steps customers need to take to initiate a refund, along with any exceptions or situations where refunds may not be available.</p>
            </RTE>
        </>
    )
}