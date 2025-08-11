import Image from "next/image"

import { PersonCardProps } from "@/types/personCardInterface"

export default function PersonCard({profileAsset, fullName, role}: PersonCardProps) {
    return (
        <div className="PersonCard lg:text-center">
            <div tabIndex={0} aria-label={`${fullName}, ${role}`} className="relative mb-4 aspect-[1] group rounded-3xl after:absolute after:inset-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 after:person-card-shadow lg:aspect-[3/4]">
                <Image
                    className="rounded-3xl group-hover:grayscale transition duration-300"
                    src={profileAsset}
                    fill
                    alt={fullName}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <h3 className="text-2xl mb-1.5">{fullName}</h3>
            <span>{role}</span>
        </div>
    )
}
