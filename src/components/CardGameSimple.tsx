import Image from "next/image"

import { CardGameSimpleProps } from "@/types/cardGameSimpleInterface"

function getPositionClass(position: string) {
    switch (position) {
        case 'topLeft':
            return '-top-6.25 -left-3.75'
        case 'topRight':
            return '-top-6.25 -right-3.75'
        case 'top':
            return '-top-6.25 left-1/2 -translate-x-1/2'
        case 'bottom':
            return '-bottom-9 left-1/2 -translate-x-1/2'
        case 'bottomLeft':
            return '-bottom-6.25 -left-3.75'
        case 'bottomRight':
            return '-bottom-6.25 -right-3.75'
        default:
            return ''
    }
}

export default function CardGameSimple({ asset, assetAlt, heading, text, hasIcoAsset = false, icoAsset = '', icoAssetPosition = 'topRight' }: CardGameSimpleProps) {
    return (
        <div className="CardGameSimple bg-white inline-flex main-shadow gap-4 items-center py-2.5 px-3 w-full md:w-75 rounded-[20px] relative md:gap-6 md:py-5 md:px-5">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-zumthor shrink-0 md:w-22.5 md:h-22.5">
                <div className="w-17 h-17 relative md:w-19.5 md:h-19.5">
                    <Image
                        className="rounded-3xl"
                        src={asset}
                        fill
                        alt={assetAlt}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
            <div>
                <h5>{heading}</h5>
                <p className="text-sm">{text}</p>
            </div>
            {hasIcoAsset && icoAsset && <div aria-hidden="true" className={`card-ico-mobile absolute h-12.5 w-12.5 z-2 ${getPositionClass(icoAssetPosition)} xl:hidden`}>
                <Image
                    src={icoAsset}
                    fill
                    alt=""
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>}
        </div>
    )
}