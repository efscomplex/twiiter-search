import { Theme } from './types'

export const dark: Theme = {
	fg: 'black',
	bg: 'white'
}
export const light: Theme = {
	fg: dark.bg,
	bg: dark.fg
}
