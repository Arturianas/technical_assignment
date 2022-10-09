import { createContext, useReducer } from "react";
import TypesReducer from "./typesReducer";

const INITIAL_STATE = {
    selectedTypes: [],
};


export const TypesContext = createContext(INITIAL_STATE);

export const TypesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TypesReducer, INITIAL_STATE);
  
  
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