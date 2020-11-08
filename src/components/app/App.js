import React, { useState } from 'react'
import { useMemo, useCallback } from 'react'

import { useInfinityScroll, useFeedsFetcher } from 'hooks'
import { FeedsContext } from 'context'

import App from 'components/core'

import getFeeds from 'services/feeds'
import Action from 'actions'

const query = 'hulk'

export default function () {
	const [currentQuery, setCurrentQuery] = useState(query)
	const Feed = useFeedsFetcher(query)

	const callback = useCallback(async () => {
		Action.setLoading(true, Feed.$loading)
		const newFeeds = await getFeeds(currentQuery, Feed.queryOpts)
		Action.pushFeeds(newFeeds, Feed.$feeds)
		Action.setLoading(false, Feed.$loading)
	}, [Feed.$feeds, currentQuery, Feed.queryOpts, Feed.$loading])

	const scrollOpts = useMemo(
		() => ({
			callToService: callback,
			thresold: 300,
			setLoading: (val) => Action.setLoading(val, Feed.$loading),
			loading:  Feed.loading
		}),
		[callback, Feed.$loading, Feed.loading]
	)

	useInfinityScroll(scrollOpts)

	return (
		<App>
			<FeedsContext.Provider value={Feed}>
				<App.Header setQuery={setCurrentQuery} fetcher={Feed.fetcher} />
				<App.Main query={currentQuery} />
			</FeedsContext.Provider>
			<App.Footer />
		</App>
	)
}
