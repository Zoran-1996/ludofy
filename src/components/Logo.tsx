import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="Logo inline-flex p-4 rounded-[20px] bg-white gap-3 main-shadow lg:py-5.25 lg:px-7.75">
            <Image
                src="/icons/logo-shape.webp"
                width={30}
                height={30}
                alt="Ludody logo"
                style={{
                    objectFit: 'contain'
                }}
            />
            <span className="text-lg lg:text-xl font-suez-one">Ludofy</span>
        </Link>
    )
}