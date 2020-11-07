import React, { useContext } from 'react'
import uniqid from 'uniqid'
import Feed from 'components/base/feed/Feed'
import { FeedsContext } from 'context'
import { Loader } from 'components/common'
import Wrap from './styled'

export default function FeedList() {
	const { feeds, loading } = useContext(FeedsContext)

	return (
		<Wrap>
			{feedsMap(feeds)}
			{loading && <Loader />}
		</Wrap>
	)
}
const feedsMap = (feeds: any) =>
	feeds.map((feed: any) => <Feed key={uniqid()} {...feed} />)
