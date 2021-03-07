import React from 'react';
import {useRoutes} from 'hookrouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Story from './components/Story';
import Intro from './components/Intro';
import IndustrialRev from './components/history/IndustrialRev';
import Pesticides from './components/history/Pesticides';

// Creating path routes
// const routes = {
//   "/": () => <Home />,
//   "/intro": () => <Intro />,
//   "/story": () => <Story />,
// };

//Handling path routes
function App() {
  // const routeResult = useRoutes(routes)
  // return routeResult

  return(
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/story">
            <Story />
        </Route>
        
        <Route path="/pesticides">
            <Pesticides />
        </Route>
        </Switch>
        </Router>
  );
  
}

export default App;
