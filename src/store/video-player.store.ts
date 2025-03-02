import { create } from 'zustand'

export interface IVideoPlayer {
	videoUrl: string | null
	setVideoUrl: (url: string) => void
}

export const useVideoPlayerStore = create<IVideoPlayer>(set => ({
	videoUrl: null,
	setVideoUrl: url => set({ videoUrl: url })
}))
