import { 
   useReducer, 
   createContext } from 'react'

const Actions = {
   SET_FEEDS: 'SET_FEEDS',
   PUSH_FEEDS: 'PUSH_FEEDS'
}

function reducer(state, {action, payload}){
   
   switch(action){
      case(Actions.SET_FEEDS):
         return payload
      case(Actions.PUSH_FEEDS):
         return [...payload, ...state]         
      default: 
         return state
   }
}

export default function useFeeds(initial = []){
   const [
      feeds,
      dispatch 
   ] = useReducer(reducer, initial)

   const actions = {
      setFeeds: payload => dispatch({ action: Actions.SET_FEEDS, payload}),
      pushFeeds: payload => dispatch({ action: Actions.PUSH_FEEDS, payload})
   }

   return {
         feeds,
         dispatch,
         actions   }
}

export const FeedsContext = createContext({})

