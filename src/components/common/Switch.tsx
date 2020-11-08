import React, { useState } from 'react'
import styled from 'styled-components'

/* const moon = '🌙'
const sun = '☀️' */

export default function ({ callback, children, ...props }: any) {
	const [on, toggle] = useState(false)
	const onToggle = () => {
		callback?.(!on)
		toggle((state) => !state)
	}
	return (
		<Switch {...props} onClick={onToggle}>
			<Round on={on.toString()} />
			{children}
		</Switch>
	)
}

const Round = styled('div')`
	top: 0;
	height: 100%;
	width: 50%;
	border-radius: 100%;
	background-color: white;
	position: absolute;
	transition: right ease-in-out 0.2s;
	border: 3px solid var(--primary, blue);
	right: ${(props: { on: string }) => (props.on === 'true' ? '0' : '50%')};
`
const Switch = styled('div')`
	font-size: 0.8rem;
	position: relative;
	display: flex;
	gap: 8px;
	padding: 6px;
	border-radius: 2rem;
	background-color: #333;
	cursor: pointer;
	span {
		line-height: 100%;
		vertical-align: middle;
	}
`
