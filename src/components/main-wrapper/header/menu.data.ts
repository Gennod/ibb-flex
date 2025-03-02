import pageConfig from '@/config/page.config'

export interface IMenuItem {
	name: string
	url: string
}

export const menuData: IMenuItem[] = [
	{
		name: 'Home',
		url: pageConfig.HOME
	},
	{
		name: 'Movies',
		url: pageConfig.MOVIES
	},
	{
		name: 'TV Shows',
		url: pageConfig.TV_SHOWS
	},
	{
		name: 'Watchlist',
		url: pageConfig.WATCHLIST
	}
]
