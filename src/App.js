import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
  Link,
} from "react-router-dom";
import left_info from "./components/left_info";

import Home from './routes/home'

  // Requirements:
  // react-bootstrap@2.6.0
  // react-dom@18.2.0
  // react-router-dom@6.4.4
  // react-scripts@5.0.1
  // react@18.2.0
  // web-vitals@2.1.4
  // @mui/material@5.10.16

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}



export default App;
