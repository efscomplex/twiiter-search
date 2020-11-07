import React from 'react'
import { useContext, useState } from 'react'

import { FeedsContext } from 'context'
import { Topic, Select } from 'components/base'
import { Hr } from 'components/common'

import Header from './styled'
import Action from 'actions'
import getFeeds from 'services/feeds'

export default function ({ setQuery }) {
	const { $feeds, queryOpts, $loading, loading } = useContext(FeedsContext)

	const [timeout, updateTimeout] = useState(false)
	const [value, setValue] = useState('')

	const querySearch = ({ target }) => {
		if (loading) return

		setValue(target.value)
		const query = target.value
		clearTimeout(timeout)

		const timeing = setTimeout(async () => {
			if (loading) return
			try {
				Action.setLoading(true, $loading)
				const feeds = query === '' ? [] : await getFeeds(query, queryOpts)
				Action.setFeeds(feeds, $feeds)
				Action.setLoading(false, $loading)
				setQuery(query)
			} catch (err) {
				console.log(err)
			}
		}, 750)

		updateTimeout(timeing)
	}

	return (
		<Header>
			<Topic> Search </Topic>
			<input
				type='text'
				placeholder='trending search'
				className='form-control'
				onChange={querySearch}
				value={value}
			/>
			<Select />
			<Hr />
		</Header>
	)
}
