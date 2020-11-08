import React, { useContext } from 'react'
import { FeedsContext } from 'context'

import { FeedList } from 'components/base'
import { Emoticon, Loader } from 'components/common'

export default function ({ query }: any) {
   const { feeds, loading } = useContext(FeedsContext)

	const hasFeeds = feeds.data?.length > 0
	const message = hasFeeds
		? 'We have some matches by '
		: 'No matches were fond by '

	return (
		<main className='p-4'>
			<h3 className='h3 text-left mt-2'>
				<Emoticon icon={hasFeeds ? '😃 ' : '😌 '} />
				{message}
				<strong>{query}</strong>
			</h3>
         <FeedList />
         <div id="lastFeed"/>
			{loading && <Loader />}
		</main>
	)
}
