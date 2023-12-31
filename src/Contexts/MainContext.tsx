
import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'


const MainContext = createContext(null)
export default function Context ({children}) {
  
  const initialState = {number:0}
  const [state,dispatch] = useReducer(handleClick,initialState)
  const [sideBar,setSidebar] = useState(false)
  const [searchMode,setSearchMode] = useState(false)
  const [search,setSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false);
 
 function handleClick(state,action)
 {
  
   switch(action.type)
   {
    case "add":
      return {
    ...state,number:state.number+1

      }
      case "subtract":
         return{
            ...state,number:state.number-1
         }
      default:
         state
   }
}
return (
   <MainContext.Provider value={{state,dispatch,sideBar,setSidebar,searchMode,setSearchMode,search,setSearch,isSearching,setIsSearching}}>
      {children}
      </MainContext.Provider>

   
)
}

export function useMainContext ()
{
 return useContext(MainContext)
}