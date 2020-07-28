import { useEffect, useCallback } from 'react'

function mustLoad(breakPoint = 300){
   const height = document.documentElement.scrollHeight
   const clientHeight = document.documentElement.clientHeight
   const scroll = window.scrollY
   
   return  (height - scroll -clientHeight) < breakPoint 
}

function useInfinityScroll(handle, parent = null){

   const checkIfLoad = useCallback(
      () => {
         if (mustLoad()) return handle() 
         return  null
      },
      [handle]
   )
  
   useEffect(
      () => {
         const container = parent ? parent : window
         container.addEventListener('scroll', checkIfLoad)
      },
      [parent, checkIfLoad]
   )
}

export default useInfinityScroll