import React from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Chat, Join } from "./components";

function App() {
  return(
    <Router>
      <Route path='/' exact component={Join} />
      <Route path='/chat' exact component={Chat} />
    </Router>
  )
}

export default App;