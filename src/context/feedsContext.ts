import { createContext } from 'react'

interface IFeedContext {
	feeds?: any
	loading?: any
}
export default createContext({} as IFeedContext)
