import Image from "next/image"

import { GameHighlightProps } from "@/types/gameHighlightInterface"

export default function GameHighlight({ children, bgAsset, reversed = false }: GameHighlightProps) {
    return (
        <section className="GameHighlight wrapper min-h-170 flex flex-col items-center relative after:absolute after:w-full after:h-[200px] after:bg-main-clr-dark after:top-0 after:left-0 after:z-1 after:opacity-30 md:after:h-full md:flex-row md:p-20 ">
            <div aria-hidden="true" className="relative w-full h-50 md:static md:w-[initial] md:h-[initial]">
                <Image
                    src={bgAsset}
                    fill
                    alt=""
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className={`${reversed ? 'lg:ml-auto' : ''} mx-5 -mt-14 md:mt-0`}>
                {children}
            </div>
        </section>
    )
}