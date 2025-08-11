import { CardGameAdvancedProps } from "@/types/cardGameAdvancedInterface"

export interface GameData extends CardGameAdvancedProps {
    bgAsset: string
    reversed?: boolean
}

export const games: GameData[] = [
    {
        id: 'game01',
        gameIco: '/icons/arena-blaze-ico.webp',
        gameIcoAlt: 'Arena Blaze Game Icon',
        heading: 'Arena Blaze',
        subheading: 'MOBA | Strategy',
        description: 'Enter the battlefield with your chosen hero and outplay your rivals in fast-paced 5v5 showdowns. "Arena Blaze" blends real-time strategy with action-packed arena combat, built for competitive mobile gamers.',
        gameAsset: '/icons/arena-blaze-ico.webp',
        gameAssetAlt: 'Arena Blaze',
        appStoreLink: 'https://www.apple.com/app-store/',
        googlePlayLink: 'https://play.google.com/store/games?device=windows',
        bgAsset: '/images/arena-blaze-bg-showcase.webp',
        reversed: false
    },
    {
        id: 'game02',
        gameIco: '/icons/neon-paws-asset.webp',
        gameIcoAlt: 'Neon Paws',
        heading: 'Neon Paws',
        subheading: 'Cyberpunk',
        description: 'In a city where memories are currency and shadows glitch under neon light, a rogue technician and his augmented cat, Echo, uncover a hidden signal buried deep in the Grid. Navigate crumbling rooftops, decode encrypted terminals, and outwit surveillance AIs as you piece together a digital mystery that could rewrite the future.',
        gameAsset: '/icons/neon-paws-asset.webp',
        gameAssetAlt: 'Neon Paws',
        appStoreLink: 'https://www.apple.com/app-store/',
        googlePlayLink: 'https://play.google.com/store/games?device=windows',
        bgAsset: '/images/neon-paws-bg-showcase.webp',
        reversed: true
    },
    {
        id: 'game03',
        gameIco: '/icons/shard-protocol-asset.webp',
        gameIcoAlt: 'Shard Protocol',
        heading: 'Shard Protocol',
        subheading: 'Tactical',
        description: 'Step into the fractured future where dimensional rifts reshape the battlefield. Join elite operatives known as “Shards,” each wielding unique powers drawn from unstable energies. Coordinate your squad, master shifting arenas, and outsmart opponents in fast-paced, strategy-driven combat where every second—and every ability—counts.',
        gameAsset: '/icons/shard-protocol-asset.webp',
        gameAssetAlt: 'Shard Protocol',
        appStoreLink: 'https://www.apple.com/app-store/',
        googlePlayLink: 'https://play.google.com/store/games?device=windows',
        bgAsset: '/images/shard-protocol-bg-showcase.webp',
        reversed: false
    },
]