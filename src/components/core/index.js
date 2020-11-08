import styled from 'styled-components'

import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

import { withTheme } from 'HOCs'
import { theme } from 'config'

const app = styled.div`
	min-height: 100vh;
	text-align: center;
	display: grid;
	grid-template-rows: min-content 1fr min-content;

	background-color: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.fg};
	transition: background-color ease 0.3s, color ease 0.3s;
`
const App = withTheme(app, theme)

App.Header = Header
App.Main = Main
App.Footer = Footer

export default App