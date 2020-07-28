import React from 'react'
import {
   useContext,
   useState
} from 'react'
import { FeedsContext } from 'hooks/useFeeds'
import getFeeds from 'services/feeds'
import styled from 'styled-components'

export default function({setQuery}){
   const { actions, queryOpts, dispatch, loading } = useContext(FeedsContext)
   
   const [
      timeout,
      updateTimeout
   ] = useState(false)
   
   const querySearch = event => {
      const query = event.target.value
      clearTimeout(timeout)

      const timeing = setTimeout(
         async () => {
            if (loading) return 
            dispatch({ type: 'LOADING' })
            const feeds = ( query === '' )
               ? []
               : await getFeeds(query, queryOpts)
            actions.setFeeds(feeds)
            dispatch({type: 'LOADED'})
            setQuery(query)
         }, 500
      )
      updateTimeout(timeing)
   }

   return (
      <Header>
         <Topic> Topic </Topic>
         <input 
            type='text' 
            placeholder='trending search' 
            className='form-control' 
            onChange={querySearch}/>
         <Hr/>
      </Header>
   )
}

const Topic = styled.h1`
   font-weight: 500;
   font-size: 1.6rem;
   color: var(--info);
   margin-right: 2rem;
`
const Header = styled.header`
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   
   input {
      width: 16rem;
   }
`
const Hr = styled.hr`
   position: absolute;
   margin-top: 2rem;
   border-top: 1px solid var(--info);
   width: 80%;
`