import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarMain from './components/NavBarMain';
import './scss/main.scss'
import routes from './common/routes';

function App() {

  return (
    <>
      <Router>
        <NavBarMain/>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {routes && routes.length > 0 &&
              routes.map((item, index) => <Route key={index} path={item.path} element={item.element}/>)
            }
          </Routes> 
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
