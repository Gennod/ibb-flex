'use client'

import { useFilterStore } from '@/store/store'
import { twMerge } from 'tailwind-merge'
import { filtersData } from './filters.data'

export default function Filters() {
	const { currentFilter, setCurrentFilter } = useFilterStore()

	return (
		<div className='text-center mt-10 border border-slate-400/20 w-max mx-auto rounded'>
			{filtersData.map(filter => (
				<button
					className={twMerge(
						'px-4 py-2 rounded-lg transition-colors cursor-pointer font-medium bg-transparent text-white',
						filter === currentFilter && 'bg-primary'
					)}
					key={filter}
					onClick={() => setCurrentFilter(filter)}
				>
					{filter}
				</button>
			))}
		</div>
	)
}
