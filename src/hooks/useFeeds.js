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
         return { data: [...state.data, ...payload.data], meta: payload.meta }
      default:
         return state
   }
}

export default function useFeeds(initial = { data: [], meta: {} }) {
	const [feeds, $feeds] = useReducer(reducer, initial)

	return {
		feeds,
		$feeds
	}
}