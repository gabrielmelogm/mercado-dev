import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Mercado Dev',
	description:
		'A project to study microservices that replicates the mercado livre platform',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${inter.className} bg-[#eee] dark:bg-black dark:text-white`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
