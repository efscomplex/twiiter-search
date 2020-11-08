import React, { useState } from 'react'
import { Topic } from 'components/base'
import { Hr } from 'components/common'

import Header from './styled'

export default function ({ setQuery, fetcher }) {
	const [timeout, updateTimeout] = useState(false)
	const [value, setValue] = useState('')

	const onSearch = ({ target }) => {
		const query = target.value
		setValue(query)
		if (query === '') return
		clearTimeout(timeout)
		const timeing = setTimeout(fetcher, 750)
		updateTimeout(timeing)
	}

	return (
		<Header>
			<Topic> Search </Topic>
			<input
				type='text'
				placeholder='trending search'
				className='form-control'
				onChange={onSearch}
				value={value}
			/>
			<Hr />
		</Header>
	)
}
