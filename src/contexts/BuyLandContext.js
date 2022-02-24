import React from "react";

export const BuyLandContext = React.createContext()

const initialState = {
  numOfItems: 0,
  typeLandplot: '',
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SHOW_LANDPLOT':
      return {
        ...state,
        typeLandplot: action.payload.typeLandplot
      }

    case 'EXIT_LANDPLOT':
      return {
        ...state,
        typeLandplot: ''
      }

    case 'ADD_TO_CART':
      return {
        ...state,
        numOfItems: state.numOfItems + 1
      }
      
    default:
      return state
  }
}

const BuyLandContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <BuyLandContext.Provider value={{state, dispatch}}>
      {children}
    </BuyLandContext.Provider>
  )
}

export default BuyLandContextProvider