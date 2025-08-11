import { careers } from '@/data/careersData'
import CareerContent from '@/components/CareerContent'
import ErrorComponent from '@/components/ErrorComponent'
import { use } from 'react'

export default function CareerPage({ params }: {params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const career = careers.find((c) => c.id === id)

    if (!career) {
        return <ErrorComponent text="Career page not found!!!" />
    }

    return <CareerContent career={career} />
}
