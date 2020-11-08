interface ITheme {
	fg: string
	bg: string
	[key: string]: any
}
class Theme {
	constructor(theme: ITheme) {
		this.theme = theme
	}
	private set fg(value: string) {
		this.fg = value
	}
	private set bg(value: string) {
		this.bg = value
	}
	private set theme({ fg, bg }: ITheme) {
		this.bg = bg
		this.fg = fg
	}
}

export { Theme }
