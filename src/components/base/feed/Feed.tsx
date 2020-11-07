import React from 'react'
import Feed from './styled'

export default function ({ username, text, created, avatar }: any) {
	return (
		<Feed className='bg-dark text-white'>
			<div>
				<img src={avatar} alt='avatar-pic' />
			</div>
			<div className='info'>
				<h6 className='mb-3'>{username}</h6>
				<p className='text-info'>{text}</p>
				<p className='text-muted'>created at: {created}</p>
			</div>
		</Feed>
	)
}
