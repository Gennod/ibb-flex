'use client'

import { Bell, Grip, Search } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import Menu from './Menu'

const checkMediaPath = (pathname: string | null) => {
	return !pathname?.includes('/media/')
}

export default function Header({ pathname }: { pathname: string | null }) {
	const [isShowMenu, setIsShowMenu] = useState(checkMediaPath(pathname))

	const clientPathName = usePathname()

	useEffect(() => {
		setIsShowMenu(checkMediaPath(clientPathName))
	}, [clientPathName])

	return (
		<header className="relative z-10 flex items-center justify-between px-6 py-7">
			<div className="flex items-center gap-6">
				<Grip className="hover:text-primary cursor-pointer transition-colors" />
				{isShowMenu && <Menu />}
			</div>

			<div className="flex items-center gap-6">
				<Search className="hover:text-primary cursor-pointer transition-colors" />
				<Bell className="hover:text-primary cursor-pointer transition-colors" />
				<Image
					src="/profile-img.jpg"
					alt="Profile picture"
					width={45}
					height={45}
					className="rounded-full"
				/>
			</div>
		</header>
	)
}
