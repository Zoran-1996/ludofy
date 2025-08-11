import type { Metadata } from "next"
import { Open_Sans, Suez_One, Poppins } from "next/font/google"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

import "./globals.css"

const openSans = Open_Sans({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans'
})

const suezOne = Suez_One({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-suez-one'
})

const poppins = Poppins({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins'
})

export const metadata: Metadata = {
	title: "Ludofy | Homepage",
	description: "",
	icons: {
		icon: '/icons/favicon.ico',
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				cz-shortcut-listen="true"
				className={`${openSans.variable} ${suezOne.variable} ${poppins.variable} antialiased`}
			>
				<a
					href="#main-content"
					className="absolute left-6 -translate-y-full focus:translate-y-0 transition-transform duration-300 z-[10000] bg-white text-black p-2 focus:outline focus:outline-offset-2 focus:outline-black"
				>
					Skip to main content
				</a>

				<Header />
				<ScrollToTop />
				<main id="main-content" role="main">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
