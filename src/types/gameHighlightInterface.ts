import { ReactNode } from "react"

export interface GameHighlightProps {
    children: ReactNode
    bgAsset: string
    reversed?: boolean
}