
import React from 'react'
import { useContext,createContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'

type Props = {}
const MainContext = createContext(null)
export default function Context ({children}) {
  
  const initialState = {number:0}
  const [state,dispatch] = useReducer(handleClick,initialState)
  const [sideBar,setSidebar] = useState(false)
  const [searchMode,setSearchMode] = useState(false)
  

//   const runner = (url)=>
//   {
//    const[data,setData] = useState()
//    const[loading,setLoading] = useState(false)
//     useEffect(()=>
//     {
//       const shorter = async ()=>
//       {
//          try
//          {
//             setLoading(true)
//             const res = await fetch(url)
//             const realData = await res.json()
//             setData(realData)
//             setLoading(false)
        
//          }
         

      

//          catch(error)
//          {

//          console.log(error)
//          }
//       }
//       shorter() }) ,[url]
     

    
//   }
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
   <MainContext.Provider value={{state,dispatch,sideBar,setSidebar,searchMode,setSearchMode}}>
      {children}
      </MainContext.Provider>

   
)
}

export function useMainContext ()
{
 return useContext(MainContext)
}