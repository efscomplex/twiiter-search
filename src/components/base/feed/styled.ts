import styled from 'styled-components'

export default styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	border-radius: 5px;

	img {
		--avatar-size: 4rem;
		border-radius: 50%;
		display: block;
		width: var(--avatar-size);
		max-width: 6rem;
		height: var(--avatar-size);
		margin-right: 1rem;
		border: 1px solid white;
	}
	.info {
		text-align: left;
	}
`
