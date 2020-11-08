export interface Theme {
	fg: string
	bg: string
	[key: string]: string
}
export interface Themes {
	dark: Theme
	light: Theme
}
