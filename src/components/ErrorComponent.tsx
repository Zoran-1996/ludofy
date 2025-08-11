import Link from "next/link"

import { ErrorComponentProps } from "@/types/errorComponentInterface"

export default function ErrorComponent({text = "Oops! The page you're looking for doesn't exist or has been moved."}: ErrorComponentProps) {
    return (
        <div className="flex items-center justify-center py-40 px-4">
            <div role="alert" aria-live="assertive" className="max-w-md text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    {text}
                </p>
                <Link
                    aria-label="Go to homepage"
                    href="/"
                    className="btn-dark"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}