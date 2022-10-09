import { createContext, useEffect, useReducer } from "react";
import TypesReducer from "./typesReducer";

const INITIAL_STATE = {
//   user:JSON.parse(localStorage.getItem("user")) || null,
//   isFetching: false,
//   error: false,
    selectedTypes: [],
};


export const TypesContext = createContext(INITIAL_STATE);

export const TypesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TypesReducer, INITIAL_STATE);
  
//   useEffect(()=>{
//     localStorage.setItem("user", JSON.stringify(state.user))
//   },[state.user])
  
  return (
    <TypesContext.Provider
      value={{
        selectedTypes: state.selectedTypes,
        dispatch,
      }}
    >
      {children}
    </TypesContext.Provider>
  );
};