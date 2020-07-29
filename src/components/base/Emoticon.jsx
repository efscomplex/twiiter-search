import React from 'react'

export default function Emoticon({icon}){
   return (
      <span role="img" aria-label="emoticon"> 
         {icon} 
      </span>
   ) 
}