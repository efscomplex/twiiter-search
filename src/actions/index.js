import { FeedsActions } from 'hooks/useFeeds'
import { LoaderActions } from 'hooks/useLoader'

export const setFeeds = (payload, dispatch) => dispatch({ type: FeedsActions.SET_FEEDS, payload})
export const pushFeeds = (payload, dispatch) => dispatch({ type: FeedsActions.PUSH_FEEDS, payload})
export const setLoading = (payload, dispatch) => dispatch({ type: LoaderActions.SET_LOADING, payload})

const Action = {
   setFeeds,
   pushFeeds,
   setLoading
}

export default Action