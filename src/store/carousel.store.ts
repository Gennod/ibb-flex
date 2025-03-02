import { create } from 'zustand'

export interface ICarouselStore {
	activeCardId: number
	setActiveCardId: (id: number) => void
}

export const useCarouselStore = create<ICarouselStore>(set => ({
	activeCardId: 4,
	setActiveCardId: id => set({ activeCardId: id }),
}))
