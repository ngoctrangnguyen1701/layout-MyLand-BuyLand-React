import React from "react";

export const BuyLandContext = React.createContext()

const initialState = {
  numOfItems: 0,
  typeLandplot: '',
  showModalBuy: false,
  showModalSell: false,
  showModalTransfer: false,
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

    case 'SHOW_MODAL_BUY':
      return {
        ...state,
        showModalBuy: true
      }

    case 'EXIT_MODAL_BUY':
      return {
        ...state,
        showModalBuy: false
      }

    case 'SHOW_MODAL_SELL':
      return {
        ...state,
        showModalBuy: true
      }

    case 'EXIT_MODAL_SELL':
      return {
        ...state,
        showModalBuy: false
      }
      
    case 'SHOW_MODAL_TRANSFER':
      return {
        ...state,
        showModalBuy: true
      }

    case 'EXIT_MODAL_TRANSFER':
      return {
        ...state,
        showModalBuy: false
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