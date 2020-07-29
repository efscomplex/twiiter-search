import { useReducer } from 'react'

export enum LoaderActions  {
   SET_LOADING = 'SET_LOADING'
}

type Action = {
   type: LoaderActions;
   payload?: any;
}

function reducer(state: Boolean, { type, payload }:Action){
   if (type === LoaderActions.SET_LOADING) 
      return payload

   return state
}

export default function useLoader(initial= false){
   const [
      loading,
      $loading,
   ] = useReducer(reducer, initial)

   return {
      loading,
      $loading,
   }
}