import React from "react"

const BuyLandPage = React.lazy(()=>import('../pages/BuyLandPage'))
const MyLandPage = React.lazy(()=>import('../pages/MyLandPage'))

const routes = [
  {
    path: '/',
    element: <BuyLandPage/>
  },
  {
    path: '/my-land',
    element: <MyLandPage/>
  },
]

export default routes