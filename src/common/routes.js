import React from "react"

const BuyLandPage = React.lazy(()=>import('../pages/BuyLandPage'))
const MyLandPage = React.lazy(()=>import('../pages/MyLandPage'))
const MyLandDetailPage = React.lazy(()=>import('../pages/MyLandDetailPage'))

const routes = [
  {
    path: '/',
    element: <BuyLandPage/>
  },
  {
    path: '/my-land',
    element: <MyLandPage/>
  },
  {
    path: '/my-land/detail',
    element: <MyLandDetailPage/>
  },
]

export default routes