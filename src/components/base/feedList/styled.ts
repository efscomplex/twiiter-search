import styled from 'styled-components'

export default styled('div')`
	margin-top: 2rem;
	margin-bottom: 4rem;

	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;

	@media (min-width: 784px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: 1084px) {
		grid-template-columns: repeat(3, 1fr);
	}
`
