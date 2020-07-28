import React from 'react'
import styled from 'styled-components'

export default function(
   {username, text, created, avatar}
){

   return (
      <Feed className="bg-dark text-white">
         <div>
            <img src={avatar} alt="avatar-pic"/>
         </div>
         <div className='info'>
            <h6 className="mb-3">{username}</h6>
            <p className="text-info">{text}</p>
            <p className="text-muted">created at: {created}</p>
         </div>
      </Feed>
   )
}

const Feed = styled.div`
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   border-radius: 5px;

   img { 
      --avatar-size: 4rem;
      border-radius: 50%;
      display: block;
      width: var(--avatar-size);
      max-width: 6rem;
      height: var(--avatar-size);
      margin-right: 1rem;
      border: 1px solid white;
   }
   .info { 
      text-align: left;
   }
`