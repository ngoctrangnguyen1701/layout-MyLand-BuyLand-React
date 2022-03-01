import React from "react";

export const NavBarMobileContext = React.createContext()

const NavBarMobileContextProvider = ({children}) => {
  const [showMenuCollapse, setShowMenuCollapse] = React.useState(false)

  return (
    <NavBarMobileContext.Provider value={{showMenuCollapse, setShowMenuCollapse}}>
      {children}
    </NavBarMobileContext.Provider>
  )
}

export default NavBarMobileContextProvider