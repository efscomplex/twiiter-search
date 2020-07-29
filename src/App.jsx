import { 
   useState, 
   useEffect,
   useMemo,
   useCallback } from 'react'
import { 
   options as initialQueryOpts, 
   initial as initialQuery } from 'config'
import {
   useFeeds, 
   useLoader,
   useInfinityScroll, } from 'hooks'
         
import {
   FeedsContext } from 'context'

import React from 'react'
import App from 'components/core'

import getFeeds from 'services/feeds'
import Action from 'actions'

import 'App.scss'

export default function() {   
   const [ currentQuery, setCurrentQuery ] = useState(initialQuery)
   const [ queryOpts, setQueryOpts ] = useState(initialQueryOpts)
   const { loading, $loading } = useLoader(false)
   const { feeds, $feeds } = useFeeds([])
   
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
            Action.setFeeds(data, $feeds)
         }
         fetchFeeds()
      }
      ,[$feeds]
   )

   const callback = useCallback(
      async () => { 
         Action.setLoading(true, $loading)
         const newFeeds = await getFeeds(currentQuery, queryOpts)
         Action.pushFeeds(newFeeds, $feeds)
         Action.setLoading(false, $loading)
      },
      [$feeds, currentQuery, queryOpts, $loading]
   )

   const scrollOpts = useMemo( () => ({
         callToService: callback, 
         thresold: 300,
         setLoading:  val => Action.setLoading(val, $loading),
         loading
      }),
      [callback, $loading, loading]
   )
   
   useInfinityScroll(scrollOpts)

  return (
    <App className="app">
      <FeedsContext.Provider value={{$feeds, feeds, queryOpts, setQueryOpts,loading, $loading}}>
            <App.Header setQuery={setCurrentQuery}/>
            <App.Main query={currentQuery}/>
      </FeedsContext.Provider>
      <App.Footer/>
    </App>
  )
}


