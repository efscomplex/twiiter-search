import React, { useContext } from 'react'
import uniqid from 'uniqid'
import Feed from 'components/base/feed/Feed'
import { FeedsContext } from 'context'
import Wrap from './styled'

export default function FeedList() {
	const { feeds } = useContext(FeedsContext)
   
	return <Wrap>{feedsMap(feeds.data)}</Wrap>
}
const feedsMap = (feeds: any) =>
	feeds?.map((feed: any) => <Feed key={uniqid()} {...feed} />)
