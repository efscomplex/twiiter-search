import React, { useState, useContext } from 'react'
import { Emoticon } from 'components/common'
import { ThemeContext } from 'HOCs'
import Header from './styled'
import Switch from 'components/common/Switch'


export default function ({ setQuery, fetcher }) {
	const [timeout, updateTimeout] = useState(false)
   const [value, setValue] = useState('')

   const setThemeMode = useContext(ThemeContext)

	const onSearch = ({ target }) => {
		const query = target.value
		setValue(query)
		if (query === '') return
		clearTimeout(timeout)
		const timeing = setTimeout(fetcher, 750)
		updateTimeout(timeing)
	}
   const toggleTheme = () => {
		setThemeMode((mode) => (mode === 'light' ? 'dark' : 'light'))
	}
	return (
		<Header>
			<input
				type='text'
				placeholder='trending search'
				className='form-control'
				onChange={onSearch}
				value={value}
			/>
			<Switch callback={toggleTheme}>
				<Emoticon icon='🌙' />
				<Emoticon icon='☀️' />
			</Switch>
		</Header>
	)
}
