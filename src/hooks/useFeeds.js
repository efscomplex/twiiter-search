import {
   useReducer,
} from 'react'

export const FeedsActions = {
   SET_FEEDS: 'SET_FEEDS',
   PUSH_FEEDS: 'PUSH_FEEDS'
}

function reducer(state, {
   type,
   payload
}) {

   switch (type) {
      case (FeedsActions.SET_FEEDS):
         return payload
      case (FeedsActions.PUSH_FEEDS):
         return [...payload, ...state]

      default:
         return state
   }
}

export default function useFeeds(initial = []) {
   const [
      feeds,
      $feeds
   ] = useReducer(reducer, initial)

   return {
      feeds,
      $feeds,
   }
}