import { MainWrapper } from '@/components/main-wrapper/MainWrapper'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Providers from './Providers'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'IBB-flex',
	description: 'Created by Ivan Blednov',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={montserrat.variable}>
				<Providers>
					<MainWrapper>{children}</MainWrapper>
				</Providers>
			</body>
		</html>
	)
}
