import React from 'react'

export default function Emoticon({ icon }: any) {
	return (
		<span role='img' aria-label='emoticon'>
			{icon}
		</span>
	)
}
