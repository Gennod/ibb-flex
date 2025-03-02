'use client'

import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { useCarouselStore } from '@/store/carousel.store'
import { useMainAnimationStore } from '@/store/main-animation'

import { IMediaItem } from '../../media/media.types'

import CarouselItemDetails from './CarouselItemDetails'
import { carouselItemAnimation } from './animations/carousel-item.animation'
import { useCarouselItemAngle } from './hooks/useCarouselItemAngle'

interface Props {
	item: IMediaItem
	index: number
	updateActiveCard: () => void
}

export default function CarouselItem({ item, index, updateActiveCard }: Props) {
	const { activeCardId, setActiveCardId } = useCarouselStore()
	const { angle, radius } = useCarouselItemAngle({ index })

	const { isNewPageAnimation } = useMainAnimationStore()

	const isActive = activeCardId === item.id

	return (
		<div
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`,
				zIndex: isActive ? 20 : 0,
				perspective: '1000px'
			}}
		>
			<m.button
				{...carouselItemAnimation(isActive, isNewPageAnimation)}
				className={twMerge(
					'relative overflow-hidden rounded-xl transition will-change-transform',
					isActive && 'shadow-lg'
				)}
				style={{
					transformStyle: 'preserve-3d'
				}}
				onClick={updateActiveCard}
			>
				<AnimatePresence>
					{isActive && <CarouselItemDetails item={item} />}
				</AnimatePresence>
				<Image
					width={252}
					height={378}
					src={item.poster}
					alt={item.title}
					draggable="false"
					className="will-change-transform"
					priority={index > 6 ? false : true}
				/>
			</m.button>
		</div>
	)
}
