import React from "react";

export const MyLandDetailContext = React.createContext()

const initialState = {
  showModalChangeHero: false,
  showModalStopMinning: false,
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SHOW_MODAL_CHANGE_HERO':
      return {
        ...state,
        showModalChangeHero: true
      }

    case 'EXIT_MODAL_CHANGE_HERO':
      return {
        ...state,
        showModalChangeHero: false
      }

    case 'SHOW_MODAL_STOP_MINNING':
      return {
        ...state,
        showModalStopMinning: true
      }

    case 'EXIT_MODAL_STOP_MINNING':
      return {
        ...state,
        showModalStopMinning: false
      }

    default:
      return state
  }
}

const MyLandDetailContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <MyLandDetailContext.Provider value={{state, dispatch}}>
      {children}
    </MyLandDetailContext.Provider>
  )
}

export default MyLandDetailContextProvider