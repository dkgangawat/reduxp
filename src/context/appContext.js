
import React,{ createContext ,useState } from 'react'
 const appcontext = createContext();
const AppContext = (props) => {
    const s1 ={
        "ClickedCard":0
    }
    const [state,setState]= useState(s1);
    const updateClickedCrd=(num)=>{
          setState(num -1)
    }
  return (
    <appcontext.Provider value={{state,updateClickedCrd}}>
       {props.children}
    </appcontext.Provider>
  )
}

export default AppContext
export {appcontext}