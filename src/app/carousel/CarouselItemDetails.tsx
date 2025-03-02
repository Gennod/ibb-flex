import { m } from 'framer-motion'
import { Star, TvMinimal } from 'lucide-react'

import { IMediaItem } from '@/media/media.types'

interface Props {
	item: IMediaItem
}

const animation = {
	initial: { opacity: 0, scale: 0.1 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.1 },
	transition: { duration: 0.5 }
}

export default function CarouselItemDetails({ item }: Props) {
	return (
		<div
			className="absolute inset-0 flex h-full w-full flex-col justify-between"
			style={{ zIndex: 2 }}
		>
			<div className="flex items-center justify-between p-2">
				<m.div
					className="bg-secondary flex items-center gap-1 rounded p-0.5 text-sm text-black"
					{...animation}
				>
					<Star size={18} />
					{item.rating.toFixed(1)}
				</m.div>
				<m.div
					className="flex items-center gap-1 rounded bg-black/60 p-1 text-sm text-white"
					{...animation}
				>
					<TvMinimal size={18} /> TV Show
				</m.div>
			</div>
			<m.div
				initial={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="to-black-0 bg-gradient-to-t from-black/90 pb-2"
			>
				<m.div {...animation}>
					<h2 className="font-medium text-white">{item.title}</h2>
				</m.div>
				<m.div
					className="text-xs text-white/50"
					{...animation}
				>
					<span>{item.year}</span>
					{item.seasons?.length && <span>{item.seasons?.length} Seasons</span>}|
					<span>All episodes</span>
				</m.div>
			</m.div>
		</div>
	)
}
