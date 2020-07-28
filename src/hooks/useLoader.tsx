import React from 'react'
import { useReducer } from 'react'

export enum LoaderActions  {
   LOADING = 'LOADING',
   LOADED = 'LOADED'
}

type Action = {
   type: LoaderActions;
   payload?: any;
}

function reducer(state: Boolean, { type }:Action){
   if (type === LoaderActions.LOADING) 
      return true
   if (type === LoaderActions.LOADED) 
      return false

   return state
}

export default function useLoader(initial= false){
   const [
      loading,
      dispatch,
   ] = useReducer(reducer, initial)

   return {
      loading,
      dispatch,
   }
}

export const Loader 
   =  <div className="spinner-border" role="status">
         <span className="sr-only">Loading...</span>
      </div>