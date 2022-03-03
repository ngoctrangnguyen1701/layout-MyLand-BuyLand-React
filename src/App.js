import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarMain from './components/NavBarMain';
import './scss/main.scss'
import routes from './common/routes';
import useViewport from 'src/common/useViewport';
import NavBarMobileContextProvider from 'src/contexts/NavBarMobileContext'

function App() {
  const viewPort = useViewport()
  const isMobile = viewPort.width < 1024
  // console.log({isMobile});

  return (
    <NavBarMobileContextProvider>
      <Router>
        <NavBarMain isCollapse={isMobile}/>
        
        <React.Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {routes && routes.length > 0 &&
              routes.map((item, index) => <Route key={index} path={item.path} element={item.element}/>)
            }
          </Routes> 
        </React.Suspense>
      </Router>
    </NavBarMobileContextProvider>
  );
}

export default App;
