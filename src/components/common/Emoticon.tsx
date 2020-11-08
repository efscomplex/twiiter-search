import React from 'react'

export default function Emoticon({ icon, ...props }: any) {
	return (
		<span role='img' aria-label='emoticon' {...props}>
			{icon}
		</span>
	)
}
