import React, { useState } from 'react'
import { useCallback } from 'react'

import { useFeedsFetcher, useIntersectionObserver } from 'hooks'
import { FeedsContext } from 'context'
import { query } from 'config'

import App from 'components/core'

import getFeeds from 'services/feeds'
import Action from 'actions'

export default function (props) {
	const [currentQuery, setCurrentQuery] = useState(query)
	const Feed = useFeedsFetcher(query)

	const callback = useCallback(async () => {
		Action.setLoading(true, Feed.$loading)
		const newFeeds = await getFeeds(currentQuery, Feed.queryOpts)
		Action.pushFeeds(newFeeds, Feed.$feeds)
		Action.setLoading(false, Feed.$loading)
	}, [Feed.$feeds, currentQuery, Feed.queryOpts, Feed.$loading])


   useIntersectionObserver(
      callback,
      'lastFeed'
   )

	return (
		<App {...props}>
			<FeedsContext.Provider value={Feed}>
				<App.Header setQuery={setCurrentQuery} fetcher={Feed.fetcher} />
				<App.Main query={currentQuery} />
			</FeedsContext.Provider>
			<App.Footer />
		</App>
	)
}
