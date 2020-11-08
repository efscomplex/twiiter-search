import React, { useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { dark, light } from './defaults'
import { Themes } from './types'

const defaultTheme: Themes = {
	dark,
	light
}

const ThemeContext = React.createContext({})

const PreferredThemeStyle = createGlobalStyle`
   @media (prefers-color-scheme: dark){
      background-color: ${(props: any) => props.theme.dark.bg};
      color: ${(props: any) => props.theme.dark.fg};
   }
`

export default function withTheme(
	Comp: React.FC,
	theme: Themes = defaultTheme,
	initial: 'dark' | 'light' = 'dark'
) {
	return (props: any) => {
		const [themeMode, setThemeMode] = useState(initial)
		const currentTheme = theme[themeMode]

		return (
			<ThemeContext.Provider value={setThemeMode}>
				<ThemeProvider theme={currentTheme}>
					<PreferredThemeStyle theme={theme} />
					<Comp {...props} />
				</ThemeProvider>
			</ThemeContext.Provider>
		)
	}
}
export { ThemeContext }
