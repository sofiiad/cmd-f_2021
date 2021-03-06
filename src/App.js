import React from 'react';
import {useRoutes} from 'hookrouter';
import './App.css';
import Home from './components/Home';
import Story from './components/Story';
import Intro from './components/Intro';

//Creating path routes
const routes = {
  "/": () => <Home />,
  "/intro": () => <Intro />,
  "/story": () => <Story />,
};

//Handling path routes
function App() {
  const routeResult = useRoutes(routes)
  return routeResult
  
}

export default App;
