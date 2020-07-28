import React from 'react'
import { 
   useState, 
   useEffect } from 'react'
import { 
   options as initialQueryOpts, 
   initial as initialQuery } from 'config'


import useFeeds, { FeedsContext } from 'hooks/useFeeds'
import useLoader, { LoaderActions } from 'hooks/useLoader'
import useInfinityScroll from 'hooks/useInfinityScroll'

import Header from 'components/core/Header'
import Main from 'components/core/Main'
import Footer from 'components/core/Footer'

import getFeeds from 'services/feeds'

import styled from 'styled-components'
import 'App.scss'

export default function() {   
   const [ currentQuery, setCurrentQuery ] = useState(initialQuery)
   const [ queryOpts, setQueryOpts ] = useState(initialQueryOpts)
   const { loading, dispatch } = useLoader(false)
   const { feeds,  actions } = useFeeds([])

   useEffect(
      () => {
         const lastFeedId = feeds.slice(-1)[0]?.id || 0
         setQueryOpts( opts => ({...opts, max_id: lastFeedId}) )
      }, 
      [feeds]
   )

   useEffect(
      () => { 
         let fetchFeeds = async () => {
            const data  = await getFeeds(initialQuery, initialQueryOpts)
            actions.setFeeds(data)
            console.log('initial query', data)
         }
         fetchFeeds()
      }
      ,[]
   )

   const handle = async () => { 
      if (loading) return
      dispatch({ type:LoaderActions.LOADING })
      const newFeeds = await getFeeds(currentQuery, queryOpts)
      dispatch({type: LoaderActions.LOADING})
      actions.pushFeeds(newFeeds)
   }

   useInfinityScroll(handle)

  return (
    <App className="app">
      <FeedsContext.Provider value={{actions, feeds, queryOpts, loading, dispatch}}>
            <Header setQuery={setCurrentQuery}/>
            <Main query={currentQuery}/>
      </FeedsContext.Provider>
      <Footer/>
    </App>
  )
}
const App = styled.div`
   min-height: 100vh;
   text-align: center;
   display: grid;
   grid-template-rows: min-content 1fr min-content;
`

