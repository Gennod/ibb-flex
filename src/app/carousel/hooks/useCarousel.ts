import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useLayoutEffect } from 'react'

import { mediaData } from '@/media/media.data'

import { useCarouselStore } from '@/store/carousel.store'
import { useMainAnimationStore } from '@/store/main-animation'

import pageConfig from '@/config/page.config'

interface Props {
	setRotateAngle: Dispatch<SetStateAction<number>>
}

const getCardIndex = (cardId: number) =>
	mediaData.findIndex(media => media.id === cardId)

export function useCarousel({ setRotateAngle }: Props) {
	const { activeCardId, setActiveCardId } = useCarouselStore()

	const { changeState, resetState, isHideOtherCards } = useMainAnimationStore()

	useLayoutEffect(() => {
		resetState()
		setActiveCardId(4)
	}, [])

	const router = useRouter()

	useEffect(() => {
		mediaData.forEach(media => {
			router.prefetch(pageConfig.MEDIA(media.slug))
		})
	}, [])

	const updateActiveCard = (id: number) => {
		if (activeCardId === id) {
			const url = pageConfig.MEDIA(mediaData[getCardIndex(id)].slug)

			// router.prefetch(url)

			changeState('isNewPageAnimation', true)
			setTimeout(() => {
				changeState('isHideHeading', true)
				changeState('isHideOtherCards', true)
			}, 600)

			setTimeout(() => {
				router.push(url)
			}, 1000)

			return
		}
		const oldIndex = getCardIndex(activeCardId)
		const newIndex = getCardIndex(id)
		const diff = newIndex - oldIndex

		let newRotateAngle = -(diff * 30)

		newRotateAngle =
			newRotateAngle === 330
				? -30
				: newRotateAngle === 300
					? -60
					: newRotateAngle
		newRotateAngle =
			newRotateAngle === -330
				? 30
				: newRotateAngle === -300
					? 60
					: newRotateAngle

		setRotateAngle(prev => {
			const newAngle = prev + newRotateAngle
			return newAngle
		})

		setActiveCardId(id)
	}

	return { updateActiveCard, isHideOtherCards }
}
