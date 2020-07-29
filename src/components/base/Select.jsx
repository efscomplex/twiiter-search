import React, {useContext} from 'react'
import styled from 'styled-components'
import {FeedsContext} from 'context'

export default ( ) => {
   const onChange = ({target}) => setQueryOpts(target.value===1 ? true : false)
   const { setQueryOpts } = useContext(FeedsContext)

   return (
      <Select 
         className="form-select" 
         aria-label="Default select example"
         onChange={onChange}
         >
            <option value="1" defaultValue>By topic (ex: #hulk) </option>
            <option value="2">Flat Search</option>
      </Select>
   )
}

const Select = styled.select`
   border: none;
   margin-left: 1rem;
   color: var(--info);
   :focus {
      outline: none;
   }
`