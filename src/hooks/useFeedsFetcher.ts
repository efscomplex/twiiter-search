import { useState, useEffect } from 'react'
import { useFeeds, useLoader } from 'hooks'

import Action from 'actions'
import getFeeds from 'services/feeds'

const initialQueryOpts = { maxResults: 10 }

export default function useFeedsFetcher(query: any) {
	const [queryOpts, setQueryOpts] = useState(initialQueryOpts)
	const { loading, $loading } = useLoader(false)
	const { feeds, $feeds } = useFeeds({ data: [], meta: {} })

	useEffect(() => {
		const nextToken = feeds.meta?.next_token
		setQueryOpts((opts) => ({ ...opts, ...nextToken }))
	}, [feeds])

	useEffect(() => {
		console.log('initial data query... hulk!!')

		let fetchFeeds = async () => {
			const feeds = await getFeeds(query, initialQueryOpts)
			Action.setFeeds(feeds, $feeds)
		}
		fetchFeeds()
	}, [$feeds, query])

	const fetcher = async () => {
		if (loading) return
		try {
			Action.setLoading(true, $loading)
			const feeds = await getFeeds(query, queryOpts)
			Action.setFeeds(feeds, $feeds)
			Action.setLoading(false, $loading)
			setQueryOpts(query)
		} catch (err) {
			console.log(err)
		}
	}
	return {
		feeds,
		$feeds,
		fetcher,
		loading,
		$loading,
		queryOpts,
		setQueryOpts
	}
}
