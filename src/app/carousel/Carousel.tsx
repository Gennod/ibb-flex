'use client'

import { m } from 'framer-motion'
import { useState } from 'react'

import { mediaData } from '@/media/media.data'

import CarouselItem from './CarouselItem'
import { useCarousel } from './hooks/useCarousel'

export default function Carousel() {
	const [rotateAngle, setRotateAngle] = useState(0)
	const { updateActiveCard, isHideOtherCards } = useCarousel({ setRotateAngle })

	return (
		<m.div
			className="relative mx-auto mt-64 h-[952px] w-[952px] will-change-transform"
			initial={{
				rotate: 0
			}}
			animate={{
				rotate: rotateAngle ? `${rotateAngle}deg` : 0,
				translateY: isHideOtherCards ? 200 : 0
			}}
			transition={{
				type: 'spring',
				stiffness: 70,
				damping: 20,
				mass: 3,
				duration: isHideOtherCards ? 1 : 0.6
			}}
		>
			{mediaData.map((media, index) => (
				<CarouselItem
					item={media}
					index={index}
					key={media.id}
					updateActiveCard={updateActiveCard.bind(null, media.id)}
				/>
			))}
		</m.div>
	)
}
