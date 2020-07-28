import React from 'react'
import { useContext } from 'react'
import {FeedsContext } from 'hooks/useFeeds'
import { Loader } from 'hooks/useLoader'
import Feed from 'components/base/Feed'
import uniqid from 'uniqid'
import styled from 'styled-components'

export default function({query}){
   const { feeds, loading } = useContext(FeedsContext)
   
   return (
      <Main className="p-4">
         <h3 className="h3 text-left mt-2">
            {  feeds.length > 0 
               ? 'We have some matches by'
               : 'No matches were fond by'
            }
            <span role="img" aria-label="emoticon"> 😃 </span> 
            '<strong>{query}</strong>'
         </h3>
         <div className="feeds">
            {feeds && feeds.map(
               feed => <Feed key={uniqid()} {...feed}/>
            )}
         </div>
         { loading && Loader }
      </Main>
   )
}

const Main = styled.main`
   .feeds {
      margin-top: 2rem;
      margin-bottom: 4rem;
     
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
   }
   @media (min-width: 784px){
      .feeds {
         grid-template-columns: 1fr 1fr;
      }
   }
   @media (min-width: 1084px){
      .feeds {
         grid-template-columns: repeat(3, 1fr);
      }
   }
`