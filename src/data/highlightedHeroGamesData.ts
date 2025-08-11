import { CardGameSimpleProps } from "@/types/cardGameSimpleInterface"

export const highlightedGames: CardGameSimpleProps[] = [
    {
        id: 'highlightedGame01',
        asset: '/icons/neon-paws-asset.webp',
        assetAlt: 'Neon Paws',
        heading: 'Neon Paws',
        text: 'Cyberpunk',
        hasIcoAsset: true,
        icoAsset: '/icons/cat.svg',
        icoAssetPosition: 'topRight'
    },
    {
        id: 'highlightedGame02',
        asset: '/icons/arena-blaze-ico.webp',
        assetAlt: 'Arena Blaze',
        heading: 'Arena Blaze',
        text: 'MOBA | Strategy',
    },
    {
        id: 'highlightedGame03',
        asset: '/icons/shard-protocol-asset.webp',
        assetAlt: 'Shard Protocol',
        heading: 'Shard Protocol',
        text: 'Tactical',
        hasIcoAsset: true,
        icoAsset: '/icons/crossed-swords.svg',
        icoAssetPosition: 'bottom'
    },
]