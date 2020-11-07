import React, { useContext } from 'react'
import { FeedsContext } from 'context'

import { FeedList } from 'components/base'
import { Emoticon } from 'components/common'

export default function ({ query }: any) {
	const { feeds } = useContext(FeedsContext)
	const message =
		feeds.length > 0 ? 'We have some matches by' : 'No matches were fond by'

	return (
		<main className='p-4'>
			<h3 className='h3 text-left mt-2'>
				<Emoticon icon={feeds.length > 0 ? '😃' : '😌'} />
				{message}
				<strong>'{query}'</strong>
			</h3>
			<FeedList />
		</main>
	)
}
