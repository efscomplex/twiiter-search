import styled from 'styled-components'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'

const App = styled.div`
   min-height: 100vh;
   text-align: center;
   display: grid;
   grid-template-rows: min-content 1fr min-content;
`

App.Header = Header
App.Main = Main
App.Footer = Footer

export default App