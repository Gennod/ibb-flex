import { m } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

import {
	firstProductAnimation,
	parentProductAnimation,
	secondProductAnimation
} from './product.animation'

export default function Products() {
	return (
		<m.div
			{...parentProductAnimation}
			className="relative"
		>
			<div className="absolute bottom-12 left-2.5">
				<Image
					width={180}
					height={180}
					src="/products/product.png"
					alt="product"
					className="relative z-3 rounded-lg bg-white"
				/>
				<m.div
					{...firstProductAnimation}
					className="absolute left-0.5 z-2 h-full w-full scale-90 rounded-lg bg-white/90"
				/>
				<m.div
					{...secondProductAnimation}
					className="absolute left-1 z-1 h-full w-full scale-80 rounded-lg bg-white/80"
				/>
			</div>
			<div
				className="flex h-28 w-full items-end rounded-lg bg-black/50 px-4 py-2.5"
				style={{ width: 200 }}
			>
				<div className="mt-2 flex w-full items-center justify-between text-sm">
					<button className="text-secondary font-semibold">Shop now</button>
				</div>
				<ChevronRight
					className="text-secondary"
					size={20}
				/>
			</div>
		</m.div>
	)
}
