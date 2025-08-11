export interface CardGameSimpleProps {
    id?: string
    asset: string
    assetAlt: string
    heading: string
    text: string
    hasIcoAsset?: boolean
    icoAsset?: string
    icoAssetPosition?: "topLeft" | "topRight" | "top" | "bottom" | "bottomLeft" | "bottomRight"
}